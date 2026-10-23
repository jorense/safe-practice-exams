import { describe, expect, test } from 'vitest'
import { CERTIFICATIONS, DEFAULT_QUESTION_COUNTS, SESSION_CERTIFICATION_TITLES } from '../config/certifications.js'

describe('certification result titles', () => {
  test.each([
    ['leadingSafe6', 'Leading SAFe 6 Exam Results'],
    ['pali', 'Professional Agile Leadership I Results'],
    ['psm2', 'Professional Scrum Master II Results'],
    ['pspo1', 'Professional Scrum Product Owner I Results'],
    ['safeTeams6', 'SAFe for Teams 6.0 Results'],
  ])('%s uses its own certification title', (certification, expectedTitle) => {
    expect(CERTIFICATIONS[certification].resultsTitle).toBe(expectedTitle)
  })
})

describe('certification question-count defaults', () => {
  test('uses the certification-sized exam for every route', () => {
    expect(DEFAULT_QUESTION_COUNTS).toEqual({
      'Leading SAFe 6': 45,
      'SAFe for Teams 6.0': 45,
      'PSM II': 30,
      'PSPO I': 40,
      'PAL-I': 36,
    })
  })
})

describe('session certification titles', () => {
  test('offers every certification when correcting historical session data', () => {
    expect(SESSION_CERTIFICATION_TITLES).toEqual([
      'Leading SAFe 6',
      'PAL I',
      'PSM II',
      'PSPO I',
      'SAFe for Teams 6.0',
    ])
  })
})
