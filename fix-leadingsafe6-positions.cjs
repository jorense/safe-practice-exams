const fs = require('fs');

// Read the Leading SAFe 6 questions file
const filePath = './src/components/LeadingSAFe6/LeadingSAFe6Questions.js';
let content = fs.readFileSync(filePath, 'utf8');

// Extract the questions array - try different patterns
let arrayMatch = content.match(/export const leadingSAFe6Questions = (\[[\s\S]*?\n\];)/);
if (!arrayMatch) {
  arrayMatch = content.match(/const leadingSAFe6Questions = (\[[\s\S]*?\n\];)/);
}
if (!arrayMatch) {
  console.error('Could not find questions array');
  process.exit(1);
}

const questionsArray = eval(arrayMatch[1]);
console.log(`Found ${questionsArray.length} questions`);

// Count current distribution
const currentDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
questionsArray.forEach(q => currentDist[q.correctAnswer]++);
console.log('\nCurrent distribution:');
console.log(`  A: ${currentDist[0]} (${(currentDist[0]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  B: ${currentDist[1]} (${(currentDist[1]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  C: ${currentDist[2]} (${(currentDist[2]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  D: ${currentDist[3]} (${(currentDist[3]/questionsArray.length*100).toFixed(1)}%)`);

// Target distribution (25% each)
const targetPerPosition = Math.floor(questionsArray.length / 4);
const targetDist = { 0: targetPerPosition, 1: targetPerPosition, 2: targetPerPosition, 3: targetPerPosition };
// Handle remainder
const remainder = questionsArray.length % 4;
for (let i = 0; i < remainder; i++) {
  targetDist[i]++;
}

console.log('\nTarget distribution:');
console.log(`  A: ${targetDist[0]} (${(targetDist[0]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  B: ${targetDist[1]} (${(targetDist[1]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  C: ${targetDist[2]} (${(targetDist[2]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  D: ${targetDist[3]} (${(targetDist[3]/questionsArray.length*100).toFixed(1)}%)`);

// Rotate options to achieve target distribution
function rotateOptions(options, correctAnswer, newCorrectAnswer) {
  const rotation = (newCorrectAnswer - correctAnswer + 4) % 4;
  if (rotation === 0) return { options, correctAnswer };
  
  const rotated = [];
  for (let i = 0; i < 4; i++) {
    rotated[i] = options[(i - rotation + 4) % 4];
  }
  return { options: rotated, correctAnswer: newCorrectAnswer };
}

// Redistribute answers
const newDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
questionsArray.forEach((question, idx) => {
  // Determine target position for this question (round-robin)
  const targetPos = idx % 4;
  
  if (question.correctAnswer !== targetPos) {
    const rotated = rotateOptions(question.options, question.correctAnswer, targetPos);
    question.options = rotated.options;
    question.correctAnswer = rotated.correctAnswer;
  }
  
  newDist[question.correctAnswer]++;
});

console.log('\nNew distribution:');
console.log(`  A: ${newDist[0]} (${(newDist[0]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  B: ${newDist[1]} (${(newDist[1]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  C: ${newDist[2]} (${(newDist[2]/questionsArray.length*100).toFixed(1)}%)`);
console.log(`  D: ${newDist[3]} (${(newDist[3]/questionsArray.length*100).toFixed(1)}%)`);

// Write back to file - preserve original pattern
const newContent = content.replace(
  /export const leadingSAFe6Questions = \[[\s\S]*?\n\];/,
  `export const leadingSAFe6Questions = ${JSON.stringify(questionsArray, null, 2)};`
);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ Leading SAFe 6 questions updated successfully!');
