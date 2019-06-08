import React from 'react'
import { graphql } from 'gatsby'

const ProfilePage = ({ data: { allInstaNode } }) => (
  <code>{allInstaNode.nodes.map(({ caption, comments, likes, preview, original }) => (
    <div>
      caption: {caption}<br/>
      comments: {comments}<br/>
      likes: {likes}<br/>
      preview: {preview}<br/>
      <br />
      <br />
      <br />
    </div>
  ))}</code>
)

export const pageQuery = graphql`
  query ProfileQuery {
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

export default ProfilePage
