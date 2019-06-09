import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
  render() {
    const { children, className, hideHeader = false } = this.props

    return (
      <div className={className}>
        {!hideHeader && <Header />}
        {children}
      </div>
    )
  }
}

export default Template
