import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import { ContactForm } from '../components/ContactForm'
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
    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Ipsum lorem dolor aliquam ante commodo
                <br />
                magna sed accumsan arcu neque.
              </h2>
            </header>
            <p>
              Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
              nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
              lobortis tortor primis integer massa adipiscing id nisi accumsan
              pellentesque commodo blandit enim arcu non at amet id arcu magna.
              Accumsan orci faucibus id eu lorem semper nunc nisi lorem
              vulputate lorem neque cubilia.
            </p>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={nodes.map(({ id, original, preview, caption }) => ({
                src: original,
                thumbnail: preview,
                caption: '',
                description: '',
              }))}
            />

            <ul className="actions">
              <li>
                <a href="/portfolio" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>
          <ContactForm />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query RecentPhotosQuery {
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
