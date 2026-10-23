import { describe, expect, test } from 'vitest'
import { CERTIFICATIONS } from '../config/certifications.js'

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
