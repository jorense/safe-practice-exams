# Question History Tracking - Bug Fixes

## Issue Reported
User reported seeing duplicate questions even after the question history tracking feature was implemented.

## Root Cause Analysis

### Three Critical Bugs Identified:

1. **Default Setting Issue**
   - `includeSeenQuestions` defaulted to `true`
   - This meant ALL questions (including previously seen ones) were shown by default
   - Users had to manually toggle the setting to exclude seen questions

2. **Shuffling Logic Bug**
   - After prioritizing questions (unseen → incorrect → correct), code applied an additional `shuffleArray()` 
   - This destroyed the prioritization and mixed seen/unseen questions randomly
   - Even unseen questions would be randomly placed throughout the list

3. **Fallback Logic**
   - When not enough unseen questions existed, code fell back to ALL questions
   - Combined with the shuffling bug, this guaranteed duplicate questions

## Fixes Implemented

### Fix 1: Change Default Behavior (App.jsx)
```javascript
// BEFORE: Default to true (include seen questions)
return savedPreference ? savedPreference === 'true' : true

// AFTER: Default to false (exclude seen questions by default)
return savedPreference ? savedPreference === 'true' : false
```

**Impact**: New users will now see only unseen questions by default. Users can still opt-in to see all questions via the settings toggle.

### Fix 2: Improve Shuffling Logic (questionHistory.js)
```javascript
// Enhanced prioritizeQuestions() to shuffle WITHIN each priority group
export const prioritizeQuestions = (questions, examType) => {
  // ... categorize into unseen, incorrect, correct ...
  
  // Shuffle each group internally
  const shuffleArray = (array) => { /* Fisher-Yates shuffle */ }
  
  // Return shuffled groups in priority order
  return [
    ...shuffleArray(unseen),      // Unseen questions (shuffled)
    ...shuffleArray(incorrect),   // Previously incorrect (shuffled)
    ...shuffleArray(correct)      // Previously correct (shuffled)
  ]
}
```

**Impact**: Questions are randomized within their priority groups, but priority order is preserved. Unseen questions always come first.

### Fix 3: Remove Extra Shuffle (All 4 ExamQuiz components)
```javascript
// BEFORE:
const prioritized = prioritizeQuestions(questionsToUse, 'psm2')
const shuffled = shuffleArray(prioritized)  // ❌ Destroys prioritization!
const selectedQuestions = shuffled.slice(0, numberOfQuestions)

// AFTER:
const prioritized = prioritizeQuestions(questionsToUse, 'psm2')  // Already shuffled internally
const selectedQuestions = prioritized.slice(0, numberOfQuestions)  // ✅ Preserves priority
```

**Impact**: Questions maintain their prioritization (unseen first) while still being randomized within each group.

## Files Modified

1. `src/App.jsx` - Changed default for `includeSeenQuestions` from `true` to `false`
2. `src/utils/questionHistory.js` - Enhanced `prioritizeQuestions()` to shuffle within priority groups
3. `src/components/PSM2/PSM2ExamQuiz.jsx` - Removed extra shuffle call
4. `src/components/PSPO1/PSPO1ExamQuiz.jsx` - Removed extra shuffle call
5. `src/components/LeadingSAFe6/LeadingSAFe6ExamQuiz.jsx` - Removed extra shuffle call
6. `src/components/SAFeTeams6/SAFeTeams6ExamQuiz.jsx` - Removed extra shuffle call

## Testing Strategy

### Test Case 1: First Session (Fresh User)
1. Clear localStorage
2. Start a practice exam with default settings
3. **Expected**: All questions should be marked as "✨ New"
4. Complete the exam

### Test Case 2: Second Session (Default Behavior)
1. Start another practice exam
2. **Expected**: 
   - No duplicate questions from session 1
   - All questions marked as "✨ New"
   - Stats show correct "Practiced" count

### Test Case 3: Toggle Setting ON
1. Go to exam settings
2. Toggle "Include previously seen questions" to ON
3. Start practice exam
4. **Expected**:
   - Can see questions from previous sessions
   - Questions marked with "🔄 Seen" badge
   - Seen questions appear AFTER new questions

### Test Case 4: Insufficient Unseen Questions
1. Complete enough sessions to see most questions
2. Request more questions than remaining unseen
3. **Expected**:
   - Falls back to showing all questions
   - Still prioritizes remaining unseen first
   - Then shows previously incorrect
   - Then shows previously correct

## Verification Commands

```bash
# Check localStorage in browser console:
JSON.parse(localStorage.getItem('practice-exam-history'))

# Verify default setting:
localStorage.getItem('lace-studio-include-seen')  // Should be 'false' or null

# Clear history for testing:
localStorage.removeItem('practice-exam-history')
```

## User Impact

**Before Fixes:**
- ❌ Duplicates appeared regularly
- ❌ Had to manually toggle setting every time
- ❌ Confusing behavior when setting was on

**After Fixes:**
- ✅ No duplicates by default
- ✅ Clear visual indicators (✨ New / 🔄 Seen)
- ✅ Smart prioritization preserved
- ✅ Opt-in to see all questions if desired

## Migration Notes

Users with existing localStorage data:
- If they previously set `includeSeenQuestions=false`, behavior unchanged
- If they relied on default `true`, they'll now see only unseen questions
- They can toggle the setting back on if they prefer the old behavior
- All existing history data remains intact and functional
