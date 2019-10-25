import React from "react"
import { graphql } from "gatsby"

const ReviewTemplate = ({ data })  => {
  console.log('data', data);
  const { markdownRemark } = data
  console.log('markdownRemark', markdownRemark);
  const { frontmatter, html } = markdownRemark
  console.log('frontmatter', frontmatter);
  return (
    <div>
      <h1>hi</h1>
      this is the page
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>

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
