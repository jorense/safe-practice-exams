import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import AppErrorBoundary from '../components/shared/AppErrorBoundary.jsx'

function BrokenView() {
  throw new Error('render failed')
}

describe('Phase 8 recovery error state', () => {
  test('offers an actionable recovery message when rendering fails', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    render(<AppErrorBoundary><BrokenView /></AppErrorBoundary>)

    expect(screen.getByRole('alert')).toHaveTextContent('saved exam progress is still stored')
    expect(screen.getByRole('button', { name: 'Reload application' })).toBeInTheDocument()
  })
})
