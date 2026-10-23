import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import HamburgerMenu from '../components/navigation/HamburgerMenu.jsx'

const navigationItems = {
  primary: [{ key: 'home', label: 'Home', icon: '⌂', action: 'home' }],
  secondary: [{ key: 'study', label: 'Study', icon: '▣', action: 'study' }],
  utility: [{ key: 'settings', label: 'Settings', icon: '⚙', action: 'settings' }],
}

function Harness({ onNavigate = vi.fn() }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <HamburgerMenu
      isOpen={isOpen}
      onToggle={() => setIsOpen(value => !value)}
      onClose={() => setIsOpen(false)}
      navigationItems={navigationItems}
      currentPage="home"
      onNavigate={onNavigate}
    />
  )
}

describe('Phase 8 mobile navigation', () => {
  test('opens an accessible menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<Harness />)

    const toggle = screen.getByTestId('nav-hamburger-toggle')
    await user.click(toggle)

    expect(screen.getByRole('navigation', { name: 'Main navigation', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu', hidden: true })).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Main navigation', hidden: true })).not.toBeInTheDocument()
    expect(toggle).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
  })

  test('navigates and closes after selecting an item', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<Harness onNavigate={onNavigate} />)

    await user.click(screen.getByTestId('nav-hamburger-toggle'))
    await user.click(screen.getByRole('button', { name: /Study/, hidden: true }))

    expect(onNavigate).toHaveBeenCalledWith('study')
    expect(screen.queryByRole('navigation', { name: 'Main navigation', hidden: true })).not.toBeInTheDocument()
  })
})
