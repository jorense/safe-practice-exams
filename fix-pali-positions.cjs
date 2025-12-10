const fs = require('fs');

// Load the questions
const content = fs.readFileSync('src/components/PALI/PALIQuestions.js', 'utf8');
const match = content.match(/const paliQuestions = \[([\s\S]*?)\];/);
const questions = eval(`[${match[1]}]`);

console.log(`Loaded ${questions.length} PAL-I questions`);

// Current distribution
const current = [0, 0, 0, 0];
questions.forEach(q => current[q.correctAnswer]++);
console.log('\nCurrent distribution:');
console.log(`A: ${current[0]}, B: ${current[1]}, C: ${current[2]}, D: ${current[3]}`);

// Apply round-robin: Q1→A(0), Q2→B(1), Q3→C(2), Q4→D(3), Q5→A(0)...
questions.forEach((q, idx) => {
  const currentCorrectIdx = q.correctAnswer;
  const targetPosition = idx % 4; // Round-robin: 0,1,2,3,0,1,2,3...
  
  if (currentCorrectIdx !== targetPosition) {
    // Rotate the options array so correct answer moves to target position
    const correctAnswer = q.options[currentCorrectIdx];
    const newOptions = [...q.options];
    
    // Remove from current position
    newOptions.splice(currentCorrectIdx, 1);
    
    // Insert at target position
    newOptions.splice(targetPosition, 0, correctAnswer);
    
    q.options = newOptions;
    q.correctAnswer = targetPosition;
  }
});

// Check new distribution
const newDist = [0, 0, 0, 0];
questions.forEach(q => newDist[q.correctAnswer]++);
console.log('\nNew distribution:');
console.log(`A: ${newDist[0]} (${(newDist[0]/questions.length*100).toFixed(1)}%)`);
console.log(`B: ${newDist[1]} (${(newDist[1]/questions.length*100).toFixed(1)}%)`);
console.log(`C: ${newDist[2]} (${(newDist[2]/questions.length*100).toFixed(1)}%)`);
console.log(`D: ${newDist[3]} (${(newDist[3]/questions.length*100).toFixed(1)}%)`);

// Generate the updated file content
const header = content.substring(0, content.indexOf('const paliQuestions = [') + 'const paliQuestions = ['.length);
const footer = content.substring(content.lastIndexOf('];'));

const questionsStr = questions.map(q => {
  const optionsStr = q.options.map(opt => `      "${opt.replace(/"/g, '\\"')}"`).join(',\n');
  return `  {
    id: ${q.id},
    question: "${q.question.replace(/"/g, '\\"')}",
    options: [
${optionsStr}
    ],
    correctAnswer: ${q.correctAnswer},
    explanation: "${q.explanation.replace(/"/g, '\\"')}",
    domain: "${q.domain}",
    difficulty: "${q.difficulty}"
  }`;
}).join(',\n');

const newContent = header + '\n' + questionsStr + '\n' + footer;

// Write back
fs.writeFileSync('src/components/PALI/PALIQuestions.js', newContent, 'utf8');
console.log('\n✅ PAL-I questions updated with balanced position distribution');
