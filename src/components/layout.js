import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'

class Template extends React.Component {
  render() {
    const { children, hideHeader = false } = this.props

    return (
      <div>
        {!hideHeader && <Header />}
        {children}
      </div>
    )
  }
}

export default Template
