import { Component } from 'react'
import styles from './AppErrorBoundary.module.css'

export default class AppErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Application error', error, info)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <main className={styles.container} role="alert">
        <div className={styles.card}>
          <span className={styles.icon} aria-hidden="true">⚠️</span>
          <h1>We couldn’t display this page</h1>
          <p>Your saved exam progress is still stored on this device. Reload the page to recover and continue.</p>
          <button type="button" onClick={() => window.location.reload()}>Reload application</button>
        </div>
      </main>
    )
  }
}
