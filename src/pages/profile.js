import React from 'react'
import { graphql } from 'gatsby'

const ProfilePage = ({ data: { allInstaNode } }) => (
  <code>{JSON.stringify(allInstaNode, null, 2)}</code>
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
