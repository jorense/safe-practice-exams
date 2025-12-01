const fs = require('fs');

const filePath = 'src/components/PSM2/PSM2Questions.js';
const content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/const psm2Questions = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Could not parse questions');
  process.exit(1);
}

const questions = eval(`[${match[1]}]`);

console.log('Finding questions with length issues...\n');

const lengthIssues = [];

questions.forEach((q) => {
  const questionNum = q.id;
  const options = q.options;
  const correctIdx = q.correctAnswer;
  
  if (!options || options.length !== 4) return;
  
  const lengths = options.map(opt => opt.length);
  const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const correctLength = lengths[correctIdx];
  
  // Check if correct answer is too long (>40% above average)
  if (correctLength > avgLength * 1.4) {
    lengthIssues.push({
      id: questionNum,
      type: 'TOO_LONG',
      correctLength,
      avgLength: Math.round(avgLength),
      percentage: Math.round((correctLength/avgLength - 1) * 100),
      correctIdx,
      question: q.question.substring(0, 80) + '...',
      options: options.map((opt, idx) => ({
        text: opt,
        length: opt.length,
        isCorrect: idx === correctIdx
      }))
    });
  }
  
  // Check if correct answer is too short (<60% of average)
  if (correctLength < avgLength * 0.6 && avgLength > 50) {
    lengthIssues.push({
      id: questionNum,
      type: 'TOO_SHORT',
      correctLength,
      avgLength: Math.round(avgLength),
      percentage: Math.round((1 - correctLength/avgLength) * 100),
      correctIdx,
      question: q.question.substring(0, 80) + '...',
      options: options.map((opt, idx) => ({
        text: opt,
        length: opt.length,
        isCorrect: idx === correctIdx
      }))
    });
  }
});

console.log(`Found ${lengthIssues.length} questions with length issues\n`);

// Sort by severity (percentage difference)
lengthIssues.sort((a, b) => b.percentage - a.percentage);

// Show top 20
console.log('Top 20 Most Severe Length Issues:\n');
console.log('='.repeat(100));

lengthIssues.slice(0, 20).forEach((issue, idx) => {
  console.log(`\n${idx + 1}. Question ${issue.id} - ${issue.type} (${issue.percentage}% difference)`);
  console.log(`   "${issue.question}"`);
  console.log(`   Correct length: ${issue.correctLength} | Average: ${issue.avgLength}`);
  console.log('   Options:');
  issue.options.forEach((opt, i) => {
    const marker = opt.isCorrect ? '✓' : ' ';
    const letter = String.fromCharCode(65 + i);
    console.log(`   [${marker}] ${letter} (${opt.length} chars): ${opt.text.substring(0, 60)}...`);
  });
});

// Save full list to file for reference
fs.writeFileSync('length-issues.json', JSON.stringify(lengthIssues, null, 2));
console.log(`\n\nFull list saved to length-issues.json (${lengthIssues.length} questions)`);
console.log('\nReady to fix these questions.');
