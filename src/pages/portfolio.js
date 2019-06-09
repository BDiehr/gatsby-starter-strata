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
        <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
        <h1><strong>Portfolio</strong></h1>
        <em
          style={{
            display: 'block',
            position: 'relative',
            marginTop: '-0.5em',
          }}
        >
          <h4>Heather Reed</h4>
        </em>
        </div>
        <br/>
        <Helmet>
          <title>Portfolio</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <section className="image-grid">
          {images.map(image => (
            <div className="image-container">
              <img key={image.id} src={image.preview} title={image.caption} />
            </div>
          ))}
        </section>
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
