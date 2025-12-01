const fs = require('fs');

const filePath = 'src/components/PSM2/PSM2Questions.js';
const content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/const psm2Questions = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Could not parse questions');
  process.exit(1);
}

const questions = eval(`[${match[1]}]`);

console.log(`Processing ${questions.length} questions...\n`);

let fixedCount = 0;

// Find all questions with "Both" or "All of the above" answers
questions.forEach(q => {
  const shortAnswers = q.options.filter(opt => 
    opt === "Both A and B" || 
    opt === "Both A and C" || 
    opt === "Both B and C" || 
    opt === "Both A and D" ||
    opt === "Both B and D" ||
    opt === "Both C and D" ||
    opt === "All of the above"
  );
  
  if (shortAnswers.length > 0) {
    // Generate a descriptive answer based on which option is correct
    const correctOpt = q.options[q.correctAnswer];
    
    if (correctOpt === "Both A and B" || correctOpt === "Both A and C" || correctOpt === "Both B and C" || 
        correctOpt === "Both A and D" || correctOpt === "Both B and D" || correctOpt === "Both C and D") {
      
      // Extract the referenced options
      let refs = correctOpt.replace("Both ", "").replace(" and ", ",").split(",");
      let referencedOptions = refs.map(ref => {
        const idx = ref.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
        return q.options[idx];
      });
      
      // Create a combined descriptive answer
      let newAnswer = referencedOptions.join("; also, ").substring(0, 100);
      if (newAnswer.length >= 100) {
        newAnswer = newAnswer.substring(0, 97) + "...";
      }
      
      // Replace
      q.options[q.correctAnswer] = newAnswer;
      fixedCount++;
      console.log(`✓ Q${q.id}: Fixed "${correctOpt}" → "${newAnswer}"`);
    }
    else if (correctOpt === "All of the above") {
      // Combine first 3 options
      const otherOptions = q.options.filter((_, idx) => idx !== q.correctAnswer);
      let newAnswer = otherOptions.slice(0, 2).join("; ").substring(0, 100);
      if (newAnswer.length >= 100) {
        newAnswer = newAnswer.substring(0, 97) + "...";
      } else {
        // Add " and more" to indicate there are more aspects
        newAnswer += "; plus additional considerations";
      }
      
      q.options[q.correctAnswer] = newAnswer;
      fixedCount++;
      console.log(`✓ Q${q.id}: Fixed "All of the above" → "${newAnswer.substring(0, 50)}..."`);
    }
  }
});

console.log(`\n${fixedCount} questions automatically fixed`);

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
console.log('\n✅ File saved!');
console.log('\nNOTE: Some generated answers may need manual refinement for clarity.');
console.log('Run audit again to check remaining issues.');
