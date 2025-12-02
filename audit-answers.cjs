const fs = require('fs');

function auditQuestions(filePath, examName) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`AUDIT REPORT: ${examName}`);
  console.log(`${'='.repeat(80)}\n`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract questions array - handle both 'const' and 'export const', with or without semicolon
    let match = content.match(/(?:export )?const \w+Questions = \[([\s\S]*?)\];/);
    if (!match) {
      // Try without semicolon (for Leading SAFe 6)
      match = content.match(/(?:export )?const \w+Questions = (\[[\s\S]*?\n\])/);
    }
    if (!match) {
      console.log(`❌ Could not parse questions from ${examName}`);
      return null;
    }

    // Parse questions using eval (safe in this context)
    const questions = eval(match[1] || `[${match[1]}]`);
    
    const issues = [];
    let correctAnswerPositions = [0, 0, 0, 0];
    let lengthIssues = 0;
    let punctuationIssues = 0;
    let keywordIssues = 0;
    
    questions.forEach((q) => {
      const questionNum = q.id;
      const options = q.options;
      const correctIdx = q.correctAnswer;
      
      // Skip multi-answer questions (they have correctAnswers array instead)
      if (q.correctAnswers !== undefined) return;
      
      if (!options || options.length !== 4) return;
      
      correctAnswerPositions[correctIdx]++;
      
      // Check lengths
      const lengths = options.map(opt => opt.length);
      const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
      const correctLength = lengths[correctIdx];
      
      if (correctLength > avgLength * 1.4) {
        lengthIssues++;
        issues.push(`Q${questionNum}: Correct answer too long (${correctLength} vs avg ${Math.round(avgLength)})`);
      }
      
      if (correctLength < avgLength * 0.6 && avgLength > 50) {
        lengthIssues++;
        issues.push(`Q${questionNum}: Correct answer too short (${correctLength} vs avg ${Math.round(avgLength)})`);
      }
      
      // Check punctuation
      const hasPeriod = options.map(opt => opt.trim().match(/[.!?]$/));
      const periodCount = hasPeriod.filter(Boolean).length;
      
      if (periodCount > 0 && periodCount < 4) {
        punctuationIssues++;
        issues.push(`Q${questionNum}: Inconsistent punctuation (${periodCount}/4)`);
      }
      
      // Check keywords
      const correctOption = options[correctIdx].toLowerCase();
      const keywords = ['both', 'facilitate', 'coach', 'help', 'collaborate', 'work with'];
      
      keywords.forEach(keyword => {
        if (correctOption.includes(keyword)) {
          const othersWithKeyword = options.filter((opt, i) => 
            i !== correctIdx && opt.toLowerCase().includes(keyword)
          ).length;
          if (othersWithKeyword === 0) {
            keywordIssues++;
            issues.push(`Q${questionNum}: Only correct answer has "${keyword}"`);
          }
        }
      });
    });
    
    console.log(`Total Questions: ${questions.length}\n`);
    console.log(`Correct Answer Position Distribution:`);
    correctAnswerPositions.forEach((count, idx) => {
      const pct = (count / questions.length * 100).toFixed(1);
      const bar = '█'.repeat(Math.round(count / questions.length * 40));
      console.log(`  ${String.fromCharCode(65 + idx)}: ${count.toString().padStart(3)} (${pct.padStart(5)}%) ${bar}`);
    });
    
    const maxPos = Math.max(...correctAnswerPositions);
    const minPos = Math.min(...correctAnswerPositions);
    const avgPos = questions.length / 4;
    
    if (maxPos - minPos > avgPos * 0.3) {
      console.log(`  ⚠️  Position bias detected! (Max: ${maxPos}, Min: ${minPos})`);
    } else {
      console.log(`  ✅ Balanced distribution`);
    }
    
    console.log(`\n📊 Issues:`);
    console.log(`  Length: ${lengthIssues}, Punctuation: ${punctuationIssues}, Keywords: ${keywordIssues}`);
    console.log(`  Total: ${issues.length}\n`);
    
    if (issues.length > 0) {
      console.log(`Top 20 Issues:\n`);
      issues.slice(0, 20).forEach(issue => console.log(`  • ${issue}`));
      if (issues.length > 20) {
        console.log(`\n  ... ${issues.length - 20} more issues`);
      }
    }
    
    return { questions: questions.length, issues: issues.length, lengthIssues, punctuationIssues, keywordIssues };
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return null;
  }
}

const exams = [
  { path: 'src/components/PSM2/PSM2Questions.js', name: 'PSM II' },
  { path: 'src/components/PSPO1/PSPO1Questions.js', name: 'PSPO I' },
  { path: 'src/components/LeadingSAFe6/LeadingSAFe6Questions.js', name: 'Leading SAFe 6' },
  { path: 'src/components/SAFeTeams6/SAFeTeams6Questions.js', name: 'SAFe Teams 6' }
];

console.log('\n🔍 ANSWER CHOICE AUDIT\n');
const results = exams.map(exam => ({ ...exam, ...auditQuestions(exam.path, exam.name) })).filter(r => r.questions);

console.log(`\n${'='.repeat(80)}`);
console.log(`SUMMARY`);
console.log(`${'='.repeat(80)}\n`);
results.forEach(r => {
  console.log(`${r.issues === 0 ? '✅' : '⚠️'} ${r.name}: ${r.questions} questions, ${r.issues} issues`);
});
