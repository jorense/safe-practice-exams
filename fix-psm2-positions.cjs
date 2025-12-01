const fs = require('fs');

// Read the PSM2 questions file
const filePath = 'src/components/PSM2/PSM2Questions.js';
const content = fs.readFileSync(filePath, 'utf8');

// Extract questions
const match = content.match(/const psm2Questions = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Could not parse questions');
  process.exit(1);
}

const questions = eval(`[${match[1]}]`);

console.log(`Loaded ${questions.length} questions`);
console.log('Current distribution:');
let currentDist = [0, 0, 0, 0];
questions.forEach(q => currentDist[q.correctAnswer]++);
currentDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Target distribution (roughly equal)
const targetPerPosition = Math.floor(questions.length / 4);
const targetDist = [
  targetPerPosition,
  targetPerPosition,
  targetPerPosition,
  questions.length - (targetPerPosition * 3) // remainder goes to D
];

console.log('\nTarget distribution:');
targetDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Create a mapping of which questions need to move to which position
const needsChange = [];
currentDist.forEach((count, pos) => {
  const diff = count - targetDist[pos];
  if (diff > 0) {
    // This position has too many, need to move some out
    needsChange.push({ from: pos, count: diff });
  }
});

console.log('\nRedistributing answers...');

// Find questions currently in position B (the overloaded position)
const positionB = questions.filter(q => q.correctAnswer === 1);
const positionsNeedingMore = [
  { pos: 0, needed: targetDist[0] - currentDist[0] },
  { pos: 2, needed: targetDist[2] - currentDist[2] },
  { pos: 3, needed: targetDist[3] - currentDist[3] }
].filter(p => p.needed > 0);

// Shuffle function
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Randomly select questions from position B to redistribute
const questionsToMove = shuffle(positionB.map(q => q.id));
let moveIndex = 0;

positionsNeedingMore.forEach(({ pos, needed }) => {
  console.log(`Moving ${needed} questions to position ${String.fromCharCode(65 + pos)}`);
  for (let i = 0; i < needed && moveIndex < questionsToMove.length; i++) {
    const qId = questionsToMove[moveIndex++];
    const question = questions.find(q => q.id === qId);
    if (question) {
      // Rotate the options and update correctAnswer
      const oldCorrect = question.correctAnswer;
      const rotations = pos - oldCorrect;
      
      if (rotations !== 0) {
        // Rotate options
        const newOptions = [...question.options];
        if (rotations > 0) {
          // Rotate right
          for (let r = 0; r < rotations; r++) {
            newOptions.unshift(newOptions.pop());
          }
        } else {
          // Rotate left
          for (let r = 0; r < Math.abs(rotations); r++) {
            newOptions.push(newOptions.shift());
          }
        }
        question.options = newOptions;
        question.correctAnswer = pos;
      }
    }
  }
});

// Verify new distribution
const newDist = [0, 0, 0, 0];
questions.forEach(q => newDist[q.correctAnswer]++);

console.log('\nNew distribution:');
newDist.forEach((count, idx) => {
  console.log(`  ${String.fromCharCode(65 + idx)}: ${count} (${(count/questions.length*100).toFixed(1)}%)`);
});

// Rebuild the file
const questionStrings = questions.map(q => {
  const optionsStr = q.options.map(opt => {
    // Escape quotes and handle multi-line
    const escaped = opt.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }).join(',\n      ');
  
  const explanationEscaped = q.explanation.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  
  return `  {
    id: ${q.id},
    question: "${q.question.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}",
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

// Write back
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ File updated successfully!');
console.log('Run the audit again to verify the changes.');
