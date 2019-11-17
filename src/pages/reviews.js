import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import "../templates/reviews.scss"
import "./main.scss";

const Reviews = ({ data }) => {
  return (
    <Layout>
      <div className="blog-wrapper">
        <div className="blog-container">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.frontmatter.title}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.excerpt}</p>
              <Link to={`/reviews/${node.frontmatter.slug}`}>Read more...</Link>
            </div>
          )
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: ASC },
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
