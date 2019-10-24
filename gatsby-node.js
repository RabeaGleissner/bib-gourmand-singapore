const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const reviewTemplate = path.resolve(`src/templates/reviewTemplate.js`)

  return graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             frontmatter {
              slug
             }
           }
         }
       }
     }
   `).then(result => {
     if (result.errors) {
       return Promise.reject(result.errors)
     }

     return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       createPage({
         path: `/reviews/${node.frontmatter.slug}`,
         component: reviewTemplate,
         context: { slug: node.frontmatter.slug },
       })
     })
   })
}
