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

const cueBalancedAnswers = {
  150: 'Sustain momentum through outcomes, wins, and impediment removal',
  154: 'Manage visible risk through incremental inspection and adaptation',
  166: 'Build conflict-resolution skills and support teams when needed',
  167: 'Set essential metrics and let teams adapt their reporting',
  198: 'Create shared agreements for cross-team interactions',
  202: 'Expose dependencies, remove avoidable ones, and manage the rest',
  205: 'Give Product Owners authority and protect their decisions',
  224: 'Invest in the skills and practices needed to build in quality',
  239: 'Reserve sustainable capacity for learning and urgent work',
  246: 'Inspect practices and norms, then evolve those harming outcomes',
  262: 'Investigate planning, skills, impediments, and external pressure',
  268: 'Make needed decisions while prioritizing team growth',
  289: 'Build the skills and practices for quality within each iteration',
  292: 'Enable frequent funding changes within fiscal constraints',
  302: 'Duplicated work and conflicting priorities',
  305: 'Understand the need and offer better visualizations',
  309: 'Reduce work in progress with leadership support',
  316: 'Support it if forecasting remains effective',
  319: 'Use cross-silo groups to improve collaboration',
  326: 'Annual budgets constrain iterative delivery and adaptation',
  328: 'Safety to disagree and take risks',
  332: 'Team dependence replaces capability',
  335: 'Show how slack enables learning and improvement',
  340: 'Fund iteratively and evaluate regularly',
  342: 'Clarify the problem before choosing a solution',
  343: 'Find specific impediments and help remove them',
  345: 'Coach conflict resolution and facilitate when needed',
  348: 'Make Sprint Reviews useful and engaging',
  349: 'Use risk information for learning and constructive action',
  356: 'Streamline procurement while teams improve current tools',
  363: 'Find root causes and restore sustainable work',
  371: 'Use estimate variance for learning, not false precision',
  373: 'Create safety and support learning during the transition',
  404: 'Discuss trade-offs and allow context-specific choices',
  411: 'Evolve culture incrementally while adapting to reality',
  419: 'Support the experiment if forecasting still works',
  421: 'Bridge silos while pursuing structural change',
  451: 'Coach quality while the team evolves its Definition of Done',
  458: 'Enable decisions without exposing individuals to harm',
  478: 'Build inclusive norms that still enable collaboration',
  482: 'Use satisfaction, retention, collaboration, and pace',
  486: 'Standardize integration needs and adapt the rest',
  492: 'Voluntary communities of practice and sharing forums',
  500: 'Teams improve continuously without leader dependence',
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

const nearDuplicateReplacements = {
  172: {
    question: 'A strategic customer insists on approving every Product Backlog change. What should leaders do?',
    options: ['Give the customer direct control of backlog ordering', 'Clarify decision rights and create frequent feedback opportunities', 'Freeze the backlog after quarterly planning', 'Require the team to obtain approval before each refinement'],
    correctAnswer: 1,
    explanation: 'Leaders protect clear product accountability while ensuring strategic customers have frequent, meaningful opportunities to provide feedback.',
    domain: 'Stakeholder Management', difficulty: 'Intermediate',
  },
  184: {
    question: 'A regulatory deadline is fixed, but the solution remains uncertain. How should leaders guide planning?',
    options: ['Fix every feature early to demonstrate control', 'Delay development until requirements become stable', 'Use short learning cycles and adjust scope while protecting the deadline', 'Ask teams to commit to both fixed scope and fixed date'],
    correctAnswer: 2,
    explanation: 'A fixed date does not remove uncertainty. Short cycles expose evidence early so scope and approach can adapt while the constraint remains transparent.',
    domain: 'Empiricism and Agility', difficulty: 'Advanced',
  },
  198: {
    question: 'Several teams use working agreements, but cross-team handoffs still fail. What should leaders encourage?',
    options: ['Replace team agreements with one enterprise procedure', 'Add managers to approve every handoff', 'Review system-level interactions and create shared cross-team agreements', 'Measure each team independently and publish rankings'],
    correctAnswer: 2,
    explanation: 'Team agreements cannot resolve system-level gaps alone. The affected teams should inspect their interactions and agree how they will collaborate.',
    domain: 'Systems Thinking', difficulty: 'Intermediate',
  },
  204: {
    question: 'A leadership experiment produces mixed evidence. What is the most useful next step?',
    options: ['Declare success using the most favorable measure', 'Return immediately to the previous approach', 'Inspect the evidence and run a focused follow-up experiment', 'Expand the experiment before discussing the results'],
    correctAnswer: 2,
    explanation: 'Mixed results are information. Leaders make measures transparent, refine what they are trying to learn, and design the next small test.',
    domain: 'Empiricism and Agility', difficulty: 'Advanced',
  },
  217: {
    question: 'Two stakeholder groups give a Product Owner incompatible outcome targets. What should leaders do?',
    options: ['Tell the Product Owner to satisfy both targets', 'Escalate every backlog decision to executives', 'Expose the conflict and align on one product direction', 'Let each stakeholder reserve part of every Sprint'],
    correctAnswer: 2,
    explanation: 'Conflicting outcome targets require strategic alignment. Leaders help stakeholders expose trade-offs and establish coherent product direction.',
    domain: 'Strategic Vision', difficulty: 'Intermediate',
  },
  220: {
    question: 'A team repeatedly works nights before releases. What leadership response best supports sustainability?',
    options: ['Celebrate the extra effort and retain the release process', 'Reduce transparency about overtime to protect morale', 'Inspect demand, quality, and release constraints and address the systemic causes', 'Rotate overtime among team members to distribute it fairly'],
    correctAnswer: 2,
    explanation: 'Recurring overtime is a system signal. Leaders address demand, technical quality, and release constraints rather than normalizing heroics.',
    domain: 'Creating High-Performing Teams', difficulty: 'Intermediate',
  },
  247: {
    question: 'A team receives frequent customer feedback but rarely changes its Product Backlog. What should leaders explore?',
    options: ['Whether feedback is translated into product decisions and learning', 'Whether customers should provide feedback less often', 'Whether the team needs a longer Sprint to process comments', 'Whether managers should order the Product Backlog directly'],
    correctAnswer: 0,
    explanation: 'Feedback creates value only when it informs decisions. Leaders explore the learning loop and obstacles preventing evidence from shaping the backlog.',
    domain: 'Product Value', difficulty: 'Intermediate',
  },
  321: {
    question: 'An Agile initiative improves delivery speed but customer outcomes decline. How should leaders interpret this?',
    options: ['The transformation is successful because output increased', 'The teams need higher velocity targets', 'Delivery efficiency is insufficient without evidence of value', 'Customer outcomes should be reviewed after the transformation ends'],
    correctAnswer: 2,
    explanation: 'Faster delivery is useful only when it improves outcomes or learning. Leaders inspect value evidence rather than treating output as success.',
    domain: 'Evidence-Based Management', difficulty: 'Intermediate',
  },
  349: {
    question: 'A transparency dashboard causes teams to hide early risks. What should leaders change?',
    options: ['Increase the number of mandatory dashboard fields', 'Use the information for learning and respond constructively to emerging risks', 'Publish individual rankings to reinforce accountability', 'Limit dashboard access until risks are resolved'],
    correctAnswer: 1,
    explanation: 'Transparency depends on how information is used. Constructive responses make it safer to expose risks early and enable timely adaptation.',
    domain: 'Agile Culture', difficulty: 'Advanced',
  },
  423: {
    question: 'A leader delegates decisions but regularly reverses them without discussion. What effect should they expect?',
    options: ['Faster development of team autonomy', 'Stronger alignment through executive oversight', 'Lower trust and reluctance to take ownership', 'More experimentation because boundaries are flexible'],
    correctAnswer: 2,
    explanation: 'Delegation without reliable decision boundaries undermines trust. Teams stop taking ownership when their decisions are unpredictably reversed.',
    domain: 'Agile Leadership Mindset', difficulty: 'Intermediate',
  },
  431: {
    question: 'Which investment best improves an organization’s ability to respond to future change?',
    options: ['Maximizing utilization of every specialist', 'Building adaptable teams, technical quality, and fast feedback loops', 'Expanding approval layers for high-impact decisions', 'Creating detailed multi-year feature commitments'],
    correctAnswer: 1,
    explanation: 'Adaptable capability comes from people, technical health, and rapid learning—not maximum utilization or speculative commitments.',
    domain: 'Organizational Design', difficulty: 'Intermediate',
  },
  446: {
    question: 'An experiment could disrupt a critical service. How should leaders enable learning responsibly?',
    options: ['Avoid experiments involving important services', 'Run the full experiment quickly to maximize evidence', 'Use guardrails, observability, and a limited blast radius', 'Transfer the experiment risk entirely to the delivery team'],
    correctAnswer: 2,
    explanation: 'Responsible experimentation uses explicit guardrails, strong observation, and limited exposure so learning does not create unmanaged harm.',
    domain: 'Creating Conditions', difficulty: 'Advanced',
  },
  460: {
    question: 'A leader publicly shares lessons from a failed decision but privately blames the team. What is the likely result?',
    options: ['Greater trust because the failure was discussed', 'Lower psychological safety because actions contradict the message', 'Faster learning because accountability remains private', 'Improved transparency through separate public and private responses'],
    correctAnswer: 1,
    explanation: 'People learn culture from consistent behavior. Public learning language cannot offset private blame and will reduce candor and trust.',
    domain: 'Agile Culture', difficulty: 'Intermediate',
  },
  468: {
    question: 'A distributed team has clear communication rules but weak personal connection. What should leaders support?',
    options: ['More status reports to increase interaction frequency', 'Intentional relationship-building alongside effective work practices', 'A return to individual assignments with fewer dependencies', 'Communication limited to formal team events'],
    correctAnswer: 1,
    explanation: 'Working agreements help coordination, while intentional relationship-building supports trust and cohesion across distance.',
    domain: 'Creating High-Performing Teams', difficulty: 'Intermediate',
  },
  479: {
    question: 'A Product Owner changes priorities after new market evidence appears. How should leaders respond?',
    options: ['Prevent changes until the next annual planning cycle', 'Ask whether the evidence supports adaptation and make impacts transparent', 'Treat every priority change as a failure of planning', 'Require stakeholders to approve the revised ordering'],
    correctAnswer: 1,
    explanation: 'Evidence-based reprioritization is appropriate when the rationale and consequences are transparent. Leaders distinguish learning from arbitrary churn.',
    domain: 'Managing Products with Agility', difficulty: 'Intermediate',
  },
  480: {
    question: 'A manager asks coaching questions but supplies the expected answer immediately afterward. What should they improve?',
    options: ['Ask more detailed questions before giving the answer', 'Allow space for others to think, decide, and learn', 'Use written instructions so the answer is clearer', 'Reserve coaching conversations for performance reviews'],
    correctAnswer: 1,
    explanation: 'Coaching develops capability only when people have genuine space to think and own decisions. Leading questions followed by answers preserve dependence.',
    domain: 'Facilitating Growth', difficulty: 'Intermediate',
  },
  485: {
    question: 'Cross-team coordination meetings identify dependencies but never remove them. What should leaders do?',
    options: ['Increase meeting frequency to track dependencies closely', 'Assign one coordinator to manage every dependency', 'Use the evidence to redesign boundaries and reduce structural coupling', 'Require more detailed dependency documentation'],
    correctAnswer: 2,
    explanation: 'Coordination can manage dependencies temporarily, but leaders should use recurring patterns to improve organizational and technical boundaries.',
    domain: 'Systems Thinking', difficulty: 'Advanced',
  },
  498: {
    question: 'Operational emergencies repeatedly interrupt improvement work. What should leaders make transparent?',
    options: ['Only the number of incidents resolved each month', 'The cost of recurring emergencies and the capacity needed to remove causes', 'Individual ownership for every production incident', 'A separate delivery target that excludes emergency work'],
    correctAnswer: 1,
    explanation: 'Making the cost and capacity trade-off visible supports an informed decision to address root causes instead of accepting permanent firefighting.',
    domain: 'Value-Driven Delivery', difficulty: 'Advanced',
  },
}

const combinationPattern = /^(all of the above|both [a-d] and [a-d])$/i

// Absolute language makes distractors easy to eliminate without knowing the
// subject. Keep the intended misconception, but phrase it as a plausible
// leadership choice rather than a caricature.
const softenDistractor = option => option
  .replace(/\balways\b/gi, 'generally')
  .replace(/\bnever\b/gi, 'rarely')
  .replace(/\ball decisions\b/gi, 'most decisions')
  .replace(/\ball teams\b/gi, 'each team')
  .replace(/\ball employees\b/gi, 'employees')
  .replace(/\bonly\b/gi, 'primarily')
  .replace(/\bmust\b/gi, 'should')
  .replace(/\bguarantees?\b/gi, 'supports')
  .replace(/\beliminat(e|es|ing)\b/gi, 'minimiz$1')
  .replace(/\bcompletely\b/gi, 'substantially')
  .replace(/\bstrictly\b/gi, 'consistently')
  .replace(/\bregardless of\b/gi, 'with limited regard for')

const tightenCorrectAnswer = option => option
  .replace(/\bin order to\b/gi, 'to')
  .replace(/\bthroughout the organization\b/gi, 'organization-wide')
  .replace(/\bwork with the team to\b/gi, 'help the team')
  .replace(/\bnecessary\b/gi, 'needed')
  .replace(/\bbased on\b/gi, 'using')

const questions = paliQuestions.map(original => {
  const question = { ...original, options: [...original.options] }
  if (replacements[question.id]) Object.assign(question, replacements[question.id])
  if (nearDuplicateReplacements[question.id]) Object.assign(question, nearDuplicateReplacements[question.id])

  const concise = cueBalancedAnswers[question.id] || conciseAnswers[question.id]
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

  const correctIndexes = question.questionType === 'multiple'
    ? question.correctAnswers
    : [question.correctAnswer]
  question.options = question.options.map((option, index) =>
    correctIndexes.includes(index) ? tightenCorrectAnswer(option) : softenDistractor(option)
  )

  question.focusArea = focusAreas[question.domain] || 'Evolving the Agile Organization'
  return question
})

const serialize = value => JSON.stringify(value, null, 2)
const output = `// Professional Agile Leadership I (PAL I) practice questions\n// Reviewed for format, answer-choice cues, and Scrum competency alignment.\n\nconst paliQuestions = ${serialize(questions)};\n\nexport { paliQuestions };\n`
fs.writeFileSync(new URL('../src/components/PALI/PALIQuestions.js', import.meta.url), output)
