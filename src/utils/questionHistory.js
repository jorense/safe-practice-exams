// Question History Utility for tracking practice progress across sessions
// Uses localStorage to persist data

const STORAGE_KEY = 'practice-exam-history'

/**
 * Get the complete history object from localStorage
 */
export const getHistory = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (error) {
    console.error('Error reading question history:', error)
    return {}
  }
}

/**
 * Save the complete history object to localStorage
 */
const saveHistory = (history) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch (error) {
    console.error('Error saving question history:', error)
  }
}

/**
 * Get history for a specific exam type
 * @param {string} examType - 'psm2', 'pspo1', 'leadingsafe6', 'safeteams6'
 */
export const getExamHistory = (examType) => {
  const history = getHistory()
  return history[examType] || {
    seenQuestions: [],
    answeredCorrectly: [],
    answeredIncorrectly: [],
    lastPracticed: null,
    totalAttempts: 0
  }
}

/**
 * Mark questions as seen and track correctness
 * @param {string} examType - Exam identifier
 * @param {Array} questionResults - Array of {id, isCorrect} objects
 */
export const recordQuestionAttempts = (examType, questionResults) => {
  const history = getHistory()
  const examHistory = history[examType] || {
    seenQuestions: [],
    answeredCorrectly: [],
    answeredIncorrectly: [],
    lastPracticed: null,
    totalAttempts: 0
  }

  questionResults.forEach(({ id, isCorrect }) => {
    // Add to seen questions if not already there
    if (!examHistory.seenQuestions.includes(id)) {
      examHistory.seenQuestions.push(id)
    }

    // Track correctness
    if (isCorrect) {
      if (!examHistory.answeredCorrectly.includes(id)) {
        examHistory.answeredCorrectly.push(id)
      }
      // Remove from incorrect if it was there
      examHistory.answeredIncorrectly = examHistory.answeredIncorrectly.filter(qId => qId !== id)
    } else {
      if (!examHistory.answeredIncorrectly.includes(id)) {
        examHistory.answeredIncorrectly.push(id)
      }
    }
  })

  examHistory.lastPracticed = new Date().toISOString()
  examHistory.totalAttempts += 1

  history[examType] = examHistory
  saveHistory(history)
}

/**
 * Check if a question has been seen before
 * @param {string} examType - Exam identifier
 * @param {number} questionId - Question ID
 */
export const isQuestionSeen = (examType, questionId) => {
  const examHistory = getExamHistory(examType)
  return examHistory.seenQuestions.includes(questionId)
}

/**
 * Get statistics for an exam
 * @param {string} examType - Exam identifier
 * @param {number} totalQuestions - Total questions available in the exam
 */
export const getExamStats = (examType, totalQuestions) => {
  const examHistory = getExamHistory(examType)
  return {
    totalSeen: examHistory.seenQuestions.length,
    totalCorrect: examHistory.answeredCorrectly.length,
    totalIncorrect: examHistory.answeredIncorrectly.length,
    totalRemaining: totalQuestions - examHistory.seenQuestions.length,
    lastPracticed: examHistory.lastPracticed,
    totalAttempts: examHistory.totalAttempts,
    masteryPercentage: examHistory.seenQuestions.length > 0 
      ? Math.round((examHistory.answeredCorrectly.length / examHistory.seenQuestions.length) * 100)
      : 0
  }
}

/**
 * Reset history for a specific exam
 * @param {string} examType - Exam identifier
 */
export const resetExamHistory = (examType) => {
  const history = getHistory()
  delete history[examType]
  saveHistory(history)
}

/**
 * Reset all exam histories
 */
export const resetAllHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error resetting history:', error)
  }
}

/**
 * Filter questions based on user preferences
 * @param {Array} questions - All available questions
 * @param {string} examType - Exam identifier
 * @param {boolean} includeSeenQuestions - Whether to include previously seen questions
 */
export const filterQuestions = (questions, examType, includeSeenQuestions) => {
  if (includeSeenQuestions) {
    return questions // Return all questions
  }

  const examHistory = getExamHistory(examType)
  // Only return questions that haven't been seen
  return questions.filter(q => !examHistory.seenQuestions.includes(q.id))
}

/**
 * Prioritize unseen questions, then incorrect, then correct
 * Each group is shuffled internally to prevent patterns
 * @param {Array} questions - All available questions
 * @param {string} examType - Exam identifier
 */
export const prioritizeQuestions = (questions, examType) => {
  const examHistory = getExamHistory(examType)
  
  const unseen = []
  const incorrect = []
  const correct = []
  
  questions.forEach(q => {
    if (!examHistory.seenQuestions.includes(q.id)) {
      unseen.push(q)
    } else if (examHistory.answeredIncorrectly.includes(q.id)) {
      incorrect.push(q)
    } else {
      correct.push(q)
    }
  })
  
  // Shuffle each group internally to add randomness while maintaining priority
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  // Return unseen first (shuffled), then incorrect (shuffled), then correct (shuffled)
  return [...shuffleArray(unseen), ...shuffleArray(incorrect), ...shuffleArray(correct)]
}
