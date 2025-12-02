const fs = require('fs');

const filePath = 'src/components/SAFeTeams6/SAFeTeams6Questions.js';
const content = fs.readFileSync(filePath, 'utf8');

// Extract questions array
const match = content.match(/const safeTeams6Questions = \[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not parse questions');
  process.exit(1);
}

const questions = eval(`[${match[1]}]`);
console.log(`Found ${questions.length} questions`);

// Current distribution
const currentDist = [0, 0, 0, 0];
questions.forEach(q => currentDist[q.correctAnswer]++);
console.log('\nCurrent distribution:');
currentDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Target: 25% each (58 per position for 232 questions)
const target = Math.floor(questions.length / 4);
const targetDist = [target, target, target, target + (questions.length % 4)];

console.log('\nTarget distribution:');
targetDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Redistribute answers using rotation
const newQuestions = questions.map((q, index) => {
  const targetPos = index % 4;
  const currentPos = q.correctAnswer;
  
  if (currentPos === targetPos) {
    return q; // No change needed
  }
  
  // Rotate options to move correct answer to target position
  const shift = (targetPos - currentPos + 4) % 4;
  const newOptions = [...q.options];
  
  // Rotate array
  for (let i = 0; i < shift; i++) {
    newOptions.unshift(newOptions.pop());
  }
  
  return {
    ...q,
    options: newOptions,
    correctAnswer: targetPos
  };
});

// Verify new distribution
const newDist = [0, 0, 0, 0];
newQuestions.forEach(q => newDist[q.correctAnswer]++);
console.log('\nNew distribution:');
newDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Generate new file content
const questionsCode = newQuestions.map(q => `  {
    id: ${q.id},
    question: ${JSON.stringify(q.question)},
    options: [
      ${q.options.map(opt => JSON.stringify(opt)).join(',\n      ')}
    ],
    correctAnswer: ${q.correctAnswer},
    explanation: ${JSON.stringify(q.explanation)},
    domain: ${JSON.stringify(q.domain)},
    difficulty: ${JSON.stringify(q.difficulty)}
  }`).join(',\n');

const newContent = `const safeTeams6Questions = [
${questionsCode}
];

export default safeTeams6Questions;
`;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ File updated successfully!');
