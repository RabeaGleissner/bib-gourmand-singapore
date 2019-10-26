import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import './reviews.scss'

const ReviewTemplate = ({ data })  => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter;

  return (
    <Layout>
      <div className="blog-wrapper">
        <div className="blog-container">
          <h2>{title}</h2>
          <p className="review-date">{date}</p>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
   query($slug: String!) {
     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
       html
       frontmatter {
         date(formatString: "DD MMMM YYYY")
         slug
         title
       }
     }
   }
 `

export default ReviewTemplate
