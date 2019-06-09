import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout hideHeader>
      <div className="blog-post-container">
        <div
          style={{ padding: '2em', maxWidth: '800px', margin: '0 auto' }}
          className="blog-post"
        >
          <h1 style={{ fontSize: '4em', paddingBottom: 0, marginBottom: 0 }}>
            <strong>{frontmatter.title}</strong>
          </h1>
          <sub>
            Posted on {frontmatter.date} by <em>Heather</em>
          </sub>
          <br />
          <div
            style={{ marginTop: '1em' }}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      frontmatter {
        date
        title
        path
      }
      html
    }
  }
`
