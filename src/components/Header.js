import React from 'react'
import { Footer } from './Footer'

const avatarUrl =
  'https://scontent-sea1-1.cdninstagram.com/vp/a8cd449290c253236ccbb3b3abe8a307/5D93A979/t51.2885-19/s320x320/60270542_1189454784548689_8408543490136342528_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com'
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatarUrl} alt="" />
          </a>
          <h1>
            <strong>Wanders Wild</strong>
          </h1>
          <h1>
            A wanderer, her dogs, a cat, plus boyfriend of forever. Eternally
            seeking mountain peaks and the perfect espresso ↟
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
