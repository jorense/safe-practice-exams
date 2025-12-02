const fs = require('fs');

const filePath = './src/components/LeadingSAFe6/LeadingSAFe6Questions.js';
let content = fs.readFileSync(filePath, 'utf8');

// Use require to load the module
delete require.cache[require.resolve(filePath)];
const { leadingSAFe6Questions } = require(filePath);

console.log(`Found ${leadingSAFe6Questions.length} questions`);

// Count current distribution
const currentDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
leadingSAFe6Questions.forEach(q => {
  if (q.correctAnswer !== undefined) {
    currentDist[q.correctAnswer]++;
  }
});
console.log('\nCurrent distribution:');
console.log(`  A: ${currentDist[0]} (${(currentDist[0]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  B: ${currentDist[1]} (${(currentDist[1]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  C: ${currentDist[2]} (${(currentDist[2]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  D: ${currentDist[3]} (${(currentDist[3]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);

// Target distribution
const targetPerPosition = Math.floor(leadingSAFe6Questions.length / 4);
console.log('\nTarget: 25% each position');

// Rotate options
function rotateOptions(options, correctAnswer, newCorrectAnswer) {
  const rotation = (newCorrectAnswer - correctAnswer + 4) % 4;
  if (rotation === 0) return { options, correctAnswer };
  
  const rotated = [];
  for (let i = 0; i < 4; i++) {
    rotated[i] = options[(i - rotation + 4) % 4];
  }
  return { options: rotated, correctAnswer: newCorrectAnswer };
}

// Redistribute
const newDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
leadingSAFe6Questions.forEach((question, idx) => {
  if (question.correctAnswer !== undefined) {
    const targetPos = idx % 4;
    
    if (question.correctAnswer !== targetPos) {
      const rotated = rotateOptions(question.options, question.correctAnswer, targetPos);
      question.options = rotated.options;
      question.correctAnswer = rotated.correctAnswer;
    }
    
    newDist[question.correctAnswer]++;
  }
});

console.log('\nNew distribution:');
console.log(`  A: ${newDist[0]} (${(newDist[0]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  B: ${newDist[1]} (${(newDist[1]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  C: ${newDist[2]} (${(newDist[2]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);
console.log(`  D: ${newDist[3]} (${(newDist[3]/leadingSAFe6Questions.length*100).toFixed(1)}%)`);

// Write back
const newContent = `export const leadingSAFe6Questions = ${JSON.stringify(leadingSAFe6Questions, null, 2)}\n`;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('\n✅ Leading SAFe 6 questions updated successfully!');
