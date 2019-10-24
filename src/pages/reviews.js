import React from "react"
import { graphql, Link } from "gatsby"

const Reviews = ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.frontmatter.title}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.excerpt}</p>
          <Link to={`/reviews/${node.frontmatter.slug}`}>Read more...</Link>
        </div>
      )
      )}
    </div>
  )
}

export const query = graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: DESC },
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date(formatString: "DD MMMM YYYY")
              }
              excerpt(pruneLength: 200)
            }
            }
            }
            }
            `
export default Reviews
