/* global console, process */
import { paliQuestions } from '../src/components/PALI/PALIQuestions.js'

const normalize = value => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const errors = []
const seenQuestions = new Map()
let multiple = 0
let trueFalse = 0
let lengthCues = 0

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
  if (question.options.length === 2 && question.options.includes('True') && question.options.includes('False')) {
    trueFalse += 1
  }
  if (!Array.isArray(correct) || correct.length === 0 || correct.some(index =>
    !Number.isInteger(index) || index < 0 || index >= question.options.length
  )) errors.push(`Question ${question.id} has invalid correct-answer metadata`)

  if (question.options.some(option => /^(all of the above|both [a-d] and [a-d])$/i.test(option.trim()))) {
    errors.push(`Question ${question.id} contains a combination-answer cue`)
  }

  const averageLength = question.options.reduce((sum, option) => sum + option.length, 0) / question.options.length
  const longestCorrect = Math.max(...correct.map(index => question.options[index].length))
  if (longestCorrect > Math.max(45, averageLength * 1.4)) {
    lengthCues += 1
    errors.push(`Question ${question.id} has a strong correct-answer length cue`)
  }
}

const summary = {
  questions: paliQuestions.length,
  singleChoice: paliQuestions.length - multiple,
  multipleAnswer: multiple,
  trueFalse,
  focusAreas: new Set(paliQuestions.map(question => question.focusArea)).size,
  strongLengthCues: lengthCues,
  errors: errors.length,
}

console.log(JSON.stringify(summary, null, 2))
if (paliQuestions.length !== 500) errors.push(`Expected 500 questions, found ${paliQuestions.length}`)
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
