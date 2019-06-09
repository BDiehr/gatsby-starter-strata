import React from 'react'
import Helmet from 'react-helmet'
import './portfolio.scss'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'
    const {
      data: {
        allInstaNode: { nodes },
      },
    } = this.props
    const images = nodes.map(({ id, original, preview, caption }) => ({
      id,
      original,
      preview,
      caption,
    }))
    return (
      <Layout className="portfolio" hideHeader>
          <h1>
            <strong>Portfolio</strong>
          </h1>
        <br />
        <Helmet>
          <title>Portfolio</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <section className="image-grid">
          {images.map(image => (
            <div className="image-container">
              <img key={image.id} src={image.preview} />
              <div className="hover-text">view more</div>
            </div>
          ))}
        </section>
        <br />
        <h2>Other brands I've partnered with</h2>
        <ul>
          <li>Dyson</li>
          <li>Stella & Chewy's</li>
          <li>Rite in the Rain</li>
          <li>Sabra</li>
          <li>Love Your Melon</li>
          <li>Flora Health</li>
          <li>Faherty Brand</li>
          <li>Hydro Flask</li>
          <li>Slow Tide</li>
          <li>Free Country</li>
          <li>Canna-Pet</li>
          <li>Nature Gnaws</li>
        </ul>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PortfolioQuery {
    allInstaNode {
      nodes {
        likes
        comments
        caption
        preview
        original
        timestamp
      }
    }
  }
`

export default HomeIndex
