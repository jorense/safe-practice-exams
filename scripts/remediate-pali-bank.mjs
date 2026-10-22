/* global URL */
import fs from 'node:fs'
import { paliQuestions } from '../src/components/PALI/PALIQuestions.js'

const conciseAnswers = {
  114: 'Share the context, shield teams from destructive pressure, and address systemic constraints',
  151: 'Understand the problem and assess options against team needs and organizational context',
  157: 'Set clear communication norms and use tools that support distributed collaboration',
  195: 'Explain uncertainty and offer ranges derived from empirical data',
  199: 'Enable honest capacity and priority discussions, with leadership support when needed',
  203: 'Involve people and address valid concerns',
  214: 'Review each policy and evolve those that create waste without serving a valid need',
  223: 'Ensure team agreements support the work and align with organizational values',
  229: 'Understand the need and enable useful changes while considering wider effects',
  243: 'Balance capability development with current delivery needs',
  250: 'Investigate the waste and evolve processes that no longer serve their purpose',
  255: 'Use only enough structure to coordinate effectively without unnecessary hierarchy',
  275: 'Protect team stability and change membership only when benefits outweigh disruption',
  286: 'Model Agile values and address cultural impediments through leadership behavior',
  290: 'Provide coaching and clear boundaries while teams develop self-management skills',
  302: 'Duplicated effort and conflicting priorities',
  303: 'Explore causes through observation',
  306: 'Coach realistic capacity planning',
  307: 'Reinforce regular inspection',
  308: 'Explain velocity limits; propose outcome measures',
  310: 'Enable cross-team knowledge sharing',
  312: 'Allow autonomy within clear boundaries and strategic direction',
  313: "Clarify 'slow' and explore its cause",
  314: 'Leadership creates supportive conditions',
  318: 'Connect teams with users and outcomes',
  321: 'Better outcomes, satisfaction, and time to market',
  322: 'Understand the need and respond differently',
  323: 'Facilitate decisions with clear constraints',
  325: 'Run a timeboxed experiment with clear criteria',
  329: 'Explore why actions remain incomplete',
  335: 'Explain how slack supports learning and improvement',
  337: 'Process without the right strategy',
  340: 'Use iterative funding and regular evaluation',
  341: 'Safety to experiment and share learning',
  342: 'Clarify the current problem before selecting a solution',
  343: 'Identify specific impediments and help remove or change them',
  344: 'Check whether the product needs restructuring',
  347: 'Make transparent trade-offs with a clear view of their consequences',
  348: 'Make Sprint Reviews engaging and valuable',
  352: 'Explain how pairing improves quality and spreads knowledge',
  355: 'Individual goals can undermine collaboration and shared ownership',
  356: 'Streamline procurement while teams optimize the tools they have',
  367: 'Find and address the cause of the time shortage',
  370: 'Coach collaborative, action-oriented Sprint Reviews',
  373: 'Create safety and support learning throughout the transition',
  375: 'Acknowledge past failures and rebuild trust through consistent small wins',
  378: 'Teams adapt practices to context and continuously improve',
  387: 'Determine whether the policy or the way teams apply it should change',
  398: 'Coach the Product Owner and align stakeholders',
  403: 'Assess meeting value, then remove or improve low-value meetings',
  409: 'Create conditions where experimentation and learning are safe',
  423: 'Track growth in team autonomy, capability, and outcomes',
  430: 'Explain the gains in quality, knowledge sharing, and collaboration',
  435: 'Understand the need and provide visibility without false precision',
  440: 'Facilitate dialogue about short-term delivery and long-term sustainability',
  443: 'Compare incremental improvement with a rewrite against the actual problem',
  445: 'Coach communication skills and support teams while those skills develop',
  455: 'Listen to the team and rebuild trust through small, reliable wins',
  466: 'Celebrate progress while making the next growth opportunity visible',
  468: 'Set explicit communication norms and intentional connection practices',
  470: 'Assess whether specialization or cross-skilling better serves the need',
  482: 'Use several indicators: satisfaction, turnover, collaboration, and sustainable pace',
  500: 'Teams improve and adapt continuously without depending on the leader',
}

const focusAreas = {
  'Agile Leadership Mindset': 'Developing People and Teams',
  'Creating High-Performing Teams': 'Developing People and Teams',
  'Agile Culture': 'Developing People and Teams',
  'Facilitating Growth': 'Developing People and Teams',
  'Creating Conditions': 'Developing People and Teams',
  'Empiricism and Agility': 'Understanding and Applying Scrum',
  Empiricism: 'Understanding and Applying Scrum',
  'Evidence-Based Management': 'Managing Products with Agility',
  'Product Value': 'Managing Products with Agility',
  'Value-Driven Delivery': 'Managing Products with Agility',
  'Stakeholder Management': 'Managing Products with Agility',
  'Strategic Vision': 'Managing Products with Agility',
  'Organizational Design': 'Evolving the Agile Organization',
  'Systems Thinking': 'Evolving the Agile Organization',
  'Leading Change': 'Evolving the Agile Organization',
}

const replacements = {
  178: {
    question: 'True or False: Leaders improve empiricism by making uncertainty and undesirable results transparent.',
    options: ['True', 'False'], correctAnswer: 0,
    explanation: 'True. Transparency makes inspection meaningful and allows people to adapt based on evidence rather than assumptions.',
    domain: 'Empiricism and Agility', difficulty: 'Foundation',
  },
  312: {
    question: 'True or False: Self-managing teams work best when leaders provide strategic direction and clear boundaries.',
    options: ['True', 'False'], correctAnswer: 0,
    explanation: 'True. Clear purpose and constraints create alignment while preserving autonomy over how the work is done.',
    domain: 'Creating High-Performing Teams', difficulty: 'Foundation',
  },
  369: {
    question: 'True or False: A higher team velocity proves that customers are receiving more value.',
    options: ['True', 'False'], correctAnswer: 1,
    explanation: 'False. Velocity describes estimated output for one team; customer and business outcomes provide evidence of value.',
    domain: 'Evidence-Based Management', difficulty: 'Foundation',
  },
  450: {
    question: 'True or False: An Agile roadmap should communicate outcomes and direction while remaining open to learning.',
    options: ['True', 'False'], correctAnswer: 0,
    explanation: 'True. Outcome-oriented roadmaps align stakeholders without presenting uncertain feature details as fixed commitments.',
    domain: 'Strategic Vision', difficulty: 'Intermediate',
  },
  488: {
    question: 'True or False: Psychological safety removes the need to hold team members accountable for professional behavior.',
    options: ['True', 'False'], correctAnswer: 1,
    explanation: 'False. Psychological safety supports candor and learning; it complements rather than replaces accountability.',
    domain: 'Agile Culture', difficulty: 'Foundation',
  },
}

const combinationPattern = /^(all of the above|both [a-d] and [a-d])$/i

const questions = paliQuestions.map(original => {
  const question = { ...original, options: [...original.options] }
  if (replacements[question.id]) Object.assign(question, replacements[question.id])

  const concise = conciseAnswers[question.id]
  if (concise && !replacements[question.id]) question.options[question.correctAnswer] = concise

  const combinationIndex = question.options.findIndex(option => combinationPattern.test(option.trim()))
  if (combinationIndex >= 0) {
    const label = question.options[combinationIndex].toLowerCase()
    let originalCorrect
    if (label === 'all of the above') {
      originalCorrect = question.options.map((_, index) => index).filter(index => index !== combinationIndex)
    } else {
      const [, first, second] = label.match(/both ([a-d]) and ([a-d])/) || []
      originalCorrect = [first, second].map(letter => letter.charCodeAt(0) - 97)
    }

    question.options = question.options.filter((_, index) => index !== combinationIndex)
    question.correctAnswers = originalCorrect
      .filter(index => index !== combinationIndex)
      .map(index => index > combinationIndex ? index - 1 : index)
      .sort((a, b) => a - b)
    question.questionType = 'multiple'
    question.selectCount = question.correctAnswers.length
    delete question.correctAnswer
  }

  question.focusArea = focusAreas[question.domain] || 'Evolving the Agile Organization'
  return question
})

const serialize = value => JSON.stringify(value, null, 2)
const output = `// Professional Agile Leadership I (PAL I) practice questions\n// Reviewed for format, answer-choice cues, and Scrum competency alignment.\n\nconst paliQuestions = ${serialize(questions)};\n\nexport { paliQuestions };\n`
fs.writeFileSync(new URL('../src/components/PALI/PALIQuestions.js', import.meta.url), output)
