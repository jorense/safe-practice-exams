const fs = require('fs');

const filePath = './src/components/LeadingSAFe6/LeadingSAFe6Questions.js';
let content = fs.readFileSync(filePath, 'utf8');

// Extract the array content
const arrayMatch = content.match(/export const leadingSAFe6Questions = (\[[\s\S]*\n\])/);
if (!arrayMatch) {
  console.error('Could not find leadingSAFe6Questions array');
  process.exit(1);
}

// Parse questions using eval
const questionsArray = eval(arrayMatch[1]);
console.log(`Found ${questionsArray.length} questions`);

// Separate single-answer and multi-answer questions
const singleAnswer = questionsArray.filter(q => q.correctAnswer !== undefined);
const multiAnswer = questionsArray.filter(q => q.correctAnswers !== undefined);

console.log(`\nQuestion types:`);
console.log(`  Single-answer: ${singleAnswer.length}`);
console.log(`  Multi-answer: ${multiAnswer.length}`);

// Count current distribution for single-answer questions only
const currentDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
singleAnswer.forEach(q => currentDist[q.correctAnswer]++);
console.log('\nCurrent distribution (single-answer only):');
console.log(`  A: ${currentDist[0]} (${(currentDist[0]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  B: ${currentDist[1]} (${(currentDist[1]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  C: ${currentDist[2]} (${(currentDist[2]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  D: ${currentDist[3]} (${(currentDist[3]/singleAnswer.length*100).toFixed(1)}%)`);

// Target distribution (25% each)
const targetPerPosition = Math.floor(singleAnswer.length / 4);
console.log('\nTarget distribution (single-answer): 25% each position');

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

// Rotate multi-answer options
function rotateMultiAnswerOptions(options, correctAnswers, rotation) {
  if (rotation === 0) return { options, correctAnswers };
  
  const rotated = [];
  for (let i = 0; i < options.length; i++) {
    rotated[i] = options[(i - rotation + options.length) % options.length];
  }
  
  const rotatedAnswers = correctAnswers.map(ans => (ans + rotation) % options.length).sort((a, b) => a - b);
  
  return { options: rotated, correctAnswers: rotatedAnswers };
}

// Redistribute single-answer questions
const newDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
let singleIdx = 0;

questionsArray.forEach((question, idx) => {
  if (question.correctAnswer !== undefined) {
    // Single-answer question - use round-robin distribution
    const targetPos = singleIdx % 4;
    
    if (question.correctAnswer !== targetPos) {
      const rotated = rotateOptions(question.options, question.correctAnswer, targetPos);
      question.options = rotated.options;
      question.correctAnswer = rotated.correctAnswer;
    }
    
    newDist[question.correctAnswer]++;
    singleIdx++;
  } else if (question.correctAnswers !== undefined) {
    // Multi-answer question - rotate to distribute answers more evenly
    // Use a simple rotation based on question index to spread them out
    const rotation = idx % question.options.length;
    if (rotation > 0) {
      const rotated = rotateMultiAnswerOptions(question.options, question.correctAnswers, rotation);
      question.options = rotated.options;
      question.correctAnswers = rotated.correctAnswers;
    }
  }
});

console.log('\nNew distribution (single-answer):');
console.log(`  A: ${newDist[0]} (${(newDist[0]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  B: ${newDist[1]} (${(newDist[1]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  C: ${newDist[2]} (${(newDist[2]/singleAnswer.length*100).toFixed(1)}%)`);
console.log(`  D: ${newDist[3]} (${(newDist[3]/singleAnswer.length*100).toFixed(1)}%)`);

// Write back to file
const newContent = `export const leadingSAFe6Questions = ${JSON.stringify(questionsArray, null, 2)}\n`;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ Leading SAFe 6 questions updated successfully!');
