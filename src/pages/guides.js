import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GuideCard from "../components/GuideCard"
import styled from "styled-components"

const Grid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  overflow: visible;
  max-width: 1200px;
`

export default props => {
  const posts = props.data.allMarkdownRemark.edges.map(e => e.node)
  return (
    <Layout>
      <SEO
        title="Forge Shop Design & Craft Guides & Tips"
        description="Forge Shop wiki helps you get the best forge shop guides and tips to make you one of the best players. Learn about how to master the city and understand every portion of the game from the top players around."
      />
      <Grid
        className="CardboxGroup"
        style={{ paddingTop: "50px", marginLeft: "5px" }}
      >
        {posts.map((post, index) => (
          <GuideCard
            key={index}
            link={post.fields.slug}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
          ></GuideCard>
        ))}
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
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
`
