/* global console, process */
import { paliQuestions } from '../src/components/PALI/PALIQuestions.js'

const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const errors = []
const seenQuestions = new Map()
let multiple = 0
let trueFalse = 0
let lengthCues = 0
let nearDuplicates = 0
let correctAbsoluteCues = 0
let distractorAbsoluteCues = 0
let correctOptionCount = 0
let distractorCount = 0
const singleChoicePositions = [0, 0, 0, 0]
const absoluteCuePattern = /\b(always|never|all|only|must|guarantee|eliminate|completely|strictly|regardless)\b/i

for (const question of paliQuestions) {
  const normalized = normalize(question.question)
  if (seenQuestions.has(normalized)) {
    errors.push(`Questions ${seenQuestions.get(normalized)} and ${question.id} are duplicates`)
  }
  seenQuestions.set(normalized, question.id)

  if (!question.focusArea) errors.push(`Question ${question.id} has no focus area`)
  if (!Array.isArray(question.options) || question.options.length < 2) {
    errors.push(`Question ${question.id} has invalid options`)
    continue
  }

  const isMultiple = question.questionType === 'multiple'
  const correct = isMultiple ? question.correctAnswers : [question.correctAnswer]
  if (isMultiple) multiple += 1
  if (!isMultiple && question.options.length === 4) singleChoicePositions[question.correctAnswer] += 1
  if (question.options.length === 2 && question.options.includes('True') && question.options.includes('False')) {
    trueFalse += 1
  }
  if (!Array.isArray(correct) || correct.length === 0 || correct.some(index =>
    !Number.isInteger(index) || index < 0 || index >= question.options.length
  )) errors.push(`Question ${question.id} has invalid correct-answer metadata`)

  if (question.options.some(option => /^(all of the above|both [a-d] and [a-d])$/i.test(option.trim()))) {
    errors.push(`Question ${question.id} contains a combination-answer cue`)
  }

  const correctLength = correct.reduce((sum, index) => sum + question.options[index].length, 0) / correct.length
  const distractors = question.options.filter((_, index) => !correct.includes(index))
  const distractorLength = distractors.reduce((sum, option) => sum + option.length, 0) / distractors.length
  if (question.options.length > 2 && correctLength > distractorLength * 1.5) {
    lengthCues += 1
    errors.push(`Question ${question.id} has a strong correct-answer length cue`)
  }

  question.options.forEach((option, index) => {
    if (correct.includes(index)) {
      correctOptionCount += 1
      if (absoluteCuePattern.test(option)) correctAbsoluteCues += 1
    } else {
      distractorCount += 1
      if (absoluteCuePattern.test(option)) distractorAbsoluteCues += 1
    }
  })
}

const significantWords = value => new Set(normalize(value).split(' ').filter(word => word.length > 3))
for (let first = 0; first < paliQuestions.length; first += 1) {
  for (let second = first + 1; second < paliQuestions.length; second += 1) {
    const firstWords = significantWords(paliQuestions[first].question)
    const secondWords = significantWords(paliQuestions[second].question)
    const union = new Set([...firstWords, ...secondWords])
    const overlap = [...firstWords].filter(word => secondWords.has(word)).length / union.size
    if (overlap >= 0.82) {
      nearDuplicates += 1
      errors.push(`Questions ${paliQuestions[first].id} and ${paliQuestions[second].id} are near duplicates`)
    }
  }
}

const summary = {
  questions: paliQuestions.length,
  singleChoice: paliQuestions.length - multiple,
  multipleAnswer: multiple,
  trueFalse,
  focusAreas: new Set(paliQuestions.map(question => question.focusArea)).size,
  strongLengthCues: lengthCues,
  nearDuplicates,
  correctAbsoluteCueRate: Number((correctAbsoluteCues / correctOptionCount).toFixed(3)),
  distractorAbsoluteCueRate: Number((distractorAbsoluteCues / distractorCount).toFixed(3)),
  singleChoicePositions,
  errors: errors.length,
}

console.log(JSON.stringify(summary, null, 2))
if (paliQuestions.length !== 500) errors.push(`Expected 500 questions, found ${paliQuestions.length}`)
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
