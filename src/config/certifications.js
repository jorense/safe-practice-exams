export const CERTIFICATIONS = Object.freeze({
  leadingSafe6: {
    shortTitle: 'Leading SAFe 6',
    resultsTitle: 'Leading SAFe 6 Exam Results',
  },
  pali: {
    shortTitle: 'PAL I',
    resultsTitle: 'Professional Agile Leadership I Results',
  },
  psm2: {
    shortTitle: 'PSM II',
    resultsTitle: 'Professional Scrum Master II Results',
  },
  pspo1: {
    shortTitle: 'PSPO I',
    resultsTitle: 'Professional Scrum Product Owner I Results',
  },
  safeTeams6: {
    shortTitle: 'SAFe for Teams 6.0',
    resultsTitle: 'SAFe for Teams 6.0 Results',
  },
})

export const DEFAULT_QUESTION_COUNTS = Object.freeze({
  'Leading SAFe 6': 45,
  'SAFe for Teams 6.0': 45,
  'PSM II': 30,
  'PSPO I': 40,
  'PAL-I': 36,
})

export const SESSION_CERTIFICATION_TITLES = Object.freeze(
  Object.values(CERTIFICATIONS).map(({ shortTitle }) => shortTitle),
)
