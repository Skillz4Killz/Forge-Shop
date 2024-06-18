const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const blueprints = require("./src/constants/blueprints/index")
const workers = require("./src/constants/workers/index")
const champions = require("./src/constants/champions/index")


const buildBlueprintPages = (createPage) => {
  const buildsPageTemplate = path.resolve("src/templates/blueprint.js")

  for (const blueprint of blueprints) {
    createPage({
      path: `blueprints/${blueprint.Name}`,
      component: buildsPageTemplate,
      context: blueprint,
    })
  }
}

const buildChampionPages = (createPage) => {
  const buildsPageTemplate = path.resolve("src/templates/champion.js")

  for (const champion of champions) {
    createPage({
      path: `champions/${champion.name}`,
      component: buildsPageTemplate,
      context: champion,
    })
  }
}


const buildWorkerPages = (createPage) => {
  const template = path.resolve("src/templates/worker.js")

  for (const worker of workers) {
    createPage({
      path: `workers/${worker.name}`,
      component: template,
      context: worker,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  buildBlueprintPages(createPage)
  buildWorkerPages(createPage)
  buildChampionPages(createPage)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              description
              category
              image
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(edge => {
      const id = edge.node.id
      // if (edge.node.frontmatter.title !== 'Mastering The City!') return;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/guide.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
