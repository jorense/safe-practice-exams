const fs = require('fs');

const filePath = 'src/components/PSM2/PSM2Questions.js';
const content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/const psm2Questions = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Could not parse questions');
  process.exit(1);
}

const questions = eval(`[${match[1]}]`);

console.log(`Loaded ${questions.length} questions\n`);

// Map of replacements for "Both X and Y" and "All of the above"
const replacements = {
  // Remaining ones from the list
  381: {
    oldAnswer: "Both B and C",
    newAnswer: "Support adoption while ensuring autonomy, and facilitate team feedback on platform capabilities they need"
  },
  405: {
    oldAnswer: "Both B and C",
    newAnswer: "Ensure the team builds required capabilities while questioning ethical implications of predictive behavior-based treatment"
  },
  310: {
    oldAnswer: "Both B and C",
    newAnswer: "Help implement trunk-based development within policy constraints while working with leadership on policy evolution"
  },
  368: {
    oldAnswer: "Both B and C",
    newAnswer: "Discourage separate backlogs and explore root causes of technical debt to address at the source"
  },
  397: {
    oldAnswer: "All of the above",
    newAnswer: "Ensure documentation and code quality, help allocate support time, and facilitate contributing to shared codebases"
  },
  // More from the list
  389: {
    oldAnswer: "Both B and C",
    newAnswer: "Requires strong automated testing and Definition of Done; Product Owner maintains release decision authority"
  },
  385: {
    oldAnswer: "Both B and C",
    newAnswer: "Add security testing to Done, include security engineers, and ensure Developers develop security capabilities"
  },
  382: {
    oldAnswer: "Both B and C",
    newAnswer: "The team maintains full understanding and control while measuring whether AI assistance truly improves outcomes"
  },
  390: {
    oldAnswer: "All of the above",
    newAnswer: "Include bias testing in Done, facilitate ethical discussions, and ensure Product Owner understands harm-prevention accountability"
  },
  380: {
    oldAnswer: "Both B and C",
    newAnswer: "Support modern tools while ensuring comprehensive testing, Definition of Done alignment, and understanding guardrails"
  },
  388: {
    oldAnswer: "All of the above",
    newAnswer: "Reserve capacity, establish on-call rotation, and facilitate sustainable incident response and prevention strategies"
  },
  396: {
    oldAnswer: "All of the above",
    newAnswer: "Embrace innovations that improve connection while ensuring accessibility and measuring actual effectiveness"
  },
  407: {
    oldAnswer: "All of the above",
    newAnswer: "Build comprehensive observability, include monitoring in Done, and use production insights to improve development"
  },
  399: {
    oldAnswer: "Both B and C",
    newAnswer: "Ensure human review for context and design while using AI to supplement but not replace peer code review"
  },
  408: {
    oldAnswer: "All of the above",
    newAnswer: "Consider technical complexity, develop required ML capabilities, and address privacy implications with proper consent"
  },
  401: {
    oldAnswer: "All of the above",
    newAnswer: "Support Responsible AI principles, help translate to technical requirements, and include in Definition of Done"
  },
  400: {
    oldAnswer: "All of the above",
    newAnswer: "Include security complexity in planning and Done, develop new security skills, and adapt to modern requirements"
  },
  409: {
    oldAnswer: "All of the above",
    newAnswer: "Ensure infrastructure-as-code skills, apply code review standards to infrastructure, and recognize improved reliability"
  },
  403: {
    oldAnswer: "Both B and C",
    newAnswer: "Develop cross-functional skills and use pairing and mob programming to maintain knowledge sharing across specialties"
  },
  411: {
    oldAnswer: "All of the above",
    newAnswer: "Support standardization benefits while ensuring implementation autonomy and helping the team understand shared practice value"
  },
  404: {
    oldAnswer: "All of the above",
    newAnswer: "Include cost optimization in Done, facilitate cost understanding and monitoring, and support cost-conscious decisions"
  },
  406: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate controlled chaos experiments with appropriate safeguards to achieve resilience while managing risk"
  },
  410: {
    oldAnswer: "All of the above",
    newAnswer: "Automate retraining, monitor for drift, and make MLOps practices sustainable parts of product maintenance"
  },
  412: {
    oldAnswer: "All of the above",
    newAnswer: "Facilitate value-complexity discussion, explore manageable approaches, and ensure mutual understanding of constraints"
  },
  413: {
    oldAnswer: "All of the above",
    newAnswer: "Support experimentation, explain quality requirements, and facilitate discussions about maintaining quality practices"
  },
  414: {
    oldAnswer: "All of the above",
    newAnswer: "Add compliance to Done, include validation in Sprints, and collaborate with organizational compliance resources"
  },
  415: {
    oldAnswer: "All of the above",
    newAnswer: "Consider integration complexity and vendor management, develop API skills, and make dependencies visible in planning"
  },
  416: {
    oldAnswer: "All of the above",
    newAnswer: "Support thoughtful use for coverage, require human review for quality, and maintain team accountability regardless of generation"
  },
  417: {
    oldAnswer: "All of the above",
    newAnswer: "Support friction removal metrics, help teams provide improvement feedback, and warn against individual performance evaluation"
  },
  418: {
    oldAnswer: "All of the above",
    newAnswer: "Recognize testing complexity, include edge deployment in Done, and develop understanding of edge constraints"
  },
  419: {
    oldAnswer: "All of the above",
    newAnswer: "Participate in mapping, help team understand their role, and use insights to improve team and organizational practices"
  },
  420: {
    oldAnswer: "Both B and C",
    newAnswer: "Make blocked deployments visible impediments and include IaC security in Done to prevent recurring blocks"
  },
  421: {
    oldAnswer: "All of the above",
    newAnswer: "Choose explainable models, build audit trails and explanation interfaces, and include explainability in Definition of Done"
  },
  422: {
    oldAnswer: "All of the above",
    newAnswer: "Recognize complex testing scenarios, address privacy implications of context data, and understand technical complexity"
  },
  423: {
    oldAnswer: "All of the above",
    newAnswer: "Support innovative AI use while ensuring developers maintain understanding and control, measuring actual outcomes"
  },
  424: {
    oldAnswer: "All of the above",
    newAnswer: "Help understand carbon-aware computing, include efficiency in decisions, and add environmental metrics to visibility"
  },
  435: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate about individual metric dangers and advocate for team-level outcome metrics that serve organizational goals"
  },
  436: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach on quality-speed relationship and explore integrating refactoring into Definition of Done or regular work"
  },
  437: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach Product Owner on empirical forecasting risks and help the team make realistic capacity-based forecasts"
  },
  438: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate discussion about true quality outcomes and whether coverage metrics serve intended purposes"
  },
  440: {
    oldAnswer: "Both B and C",
    newAnswer: "Feature flags decouple deployment from release, reducing risk while giving Product Owners release control"
  },
  441: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate on matrix structure impacts and collaborate on evidence-based organizational design that supports agility"
  },
  443: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach on velocity limitations as productivity measure and suggest outcome-based metrics like value delivery"
  },
  444: {
    oldAnswer: "Both A and C",
    newAnswer: "Coach on clear acceptance criteria and collaborative refinement, using this as a learning opportunity"
  },
  446: {
    oldAnswer: "Both A and C",
    newAnswer: "Coach on finding balance: sufficient documentation for compliance while keeping it lightweight and valuable"
  },
  447: {
    oldAnswer: "Both B and C",
    newAnswer: "Make technical debt visible to Product Owner and collaborate on sustainable improvement strategies"
  },
  448: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate discussion about structuring innovation to serve product goals while fostering learning and experimentation"
  },
  450: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach on flexible, outcome-based roadmaps showing themes and goals rather than committed detailed features"
  },
  452: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate that velocity emerges from system health and focus on removing impediments and improving flow"
  },
  454: {
    oldAnswer: "Both B and C",
    newAnswer: "Explain disruption and onboarding overhead, suggesting better timing like start of next Sprint for proper onboarding"
  },
  456: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach Product Owner on availability accountability and work collaboratively to solve the availability problem"
  },
  457: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach on making Reviews engaging: focus on outcomes, invite feedback, demonstrate real impact for stakeholder value"
  },
  458: {
    oldAnswer: "Both B and C",
    newAnswer: "Help understand root causes of missed Goals and address systemic issues rather than demanding teams work faster"
  },
  460: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate on team-optimal Sprint lengths while acknowledging coordination benefits, seeking middle ground solutions"
  },
  461: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate that high utilization creates bottlenecks and prevents slack needed for learning, improvement, and flexibility"
  },
  464: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate discussion about urgency, Sprint Goal impact, and whether Sprint cancellation is warranted given trade-offs"
  },
  465: {
    oldAnswer: "Both B and C",
    newAnswer: "Suggest using time for improvement: refactor code, automate tests, enhance tools, or develop new skills"
  },
  466: {
    oldAnswer: "Both A and C",
    newAnswer: "Coach Product Owner on how automated tests enable sustainable speed by preventing regressions and enabling refactoring"
  },
  469: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate conversation between members or bring to Retrospective as team dynamics topic without naming individuals"
  },
  470: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate discussion exploring both perspectives to find solutions serving everyone's needs effectively"
  },
  471: {
    oldAnswer: "Both B and C",
    newAnswer: "Coach team on strengthening their Done while educating management on supporting teams to meet higher standards"
  },
  472: {
    oldAnswer: "Both B and C",
    newAnswer: "Privately coach Product Owner about metric meaninglessness and better ways to demonstrate team effectiveness"
  },
  473: {
    oldAnswer: "Both B and C",
    newAnswer: "Use as retrospective topic to improve shared understanding through better refinement and Sprint Planning collaboration"
  },
  474: {
    oldAnswer: "Both B and C",
    newAnswer: "Educate that this metric incentivizes finding problems over preventing them; suggest team outcome measures instead"
  },
  475: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate discussion about investing in capability development and how learning time serves long-term product goals"
  },
  377: {
    oldAnswer: "Both B and C",
    newAnswer: "Facilitate exploring different approaches maintaining transparency and planning despite distributed time zone challenges"
  },
  379: {
    oldAnswer: "Both B and C",
    newAnswer: "Support this as AI-driven insights combined with human judgment and accountability for prioritization decisions"
  },
  387: {
    oldAnswer: "All of the above",
    newAnswer: "Use synthetic data addressing privacy concerns while understanding limitations and validating with real data when possible"
  },
  394: {
    oldAnswer: "All of the above",
    newAnswer: "Include deployment in Done if required for release, develop deployment skills, and use modern practices for consistency"
  }
};

let changesCount = 0;

// Apply replacements
Object.keys(replacements).forEach(idStr => {
  const id = parseInt(idStr);
  const replacement = replacements[idStr];
  const question = questions.find(q => q.id === id);
  
  if (question) {
    const optionIndex = question.options.findIndex(opt => opt === replacement.oldAnswer);
    if (optionIndex !== -1) {
      question.options[optionIndex] = replacement.newAnswer;
      changesCount++;
      console.log(`✓ Fixed Q${id}: "${replacement.oldAnswer}" → "${replacement.newAnswer.substring(0, 60)}..."`);
    } else {
      console.log(`✗ Q${id}: Could not find "${replacement.oldAnswer}"`);
    }
  }
});

console.log(`\n${changesCount} questions updated`);

// Rebuild the file
const questionStrings = questions.map(q => {
  const optionsStr = q.options.map(opt => {
    const escaped = opt.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }).join(',\n      ');
  
  const explanationEscaped = q.explanation.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const questionEscaped = q.question.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  
  return `  {
    id: ${q.id},
    question: "${questionEscaped}",
    options: [
      ${optionsStr}
    ],
    correctAnswer: ${q.correctAnswer},
    explanation: "${explanationEscaped}",
    domain: "${q.domain}",
    difficulty: "${q.difficulty}"
  }`;
});

const newContent = `const psm2Questions = [
${questionStrings.join(',\n')}
];

export default psm2Questions;
`;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ File updated successfully!');
