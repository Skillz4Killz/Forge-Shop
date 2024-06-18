import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Guide from "../components/Guide"
import SEO from "../components/seo"
import ImgHero from "gatsby-image"
import Fab from "@material-ui/core/Fab"
import WorkerImage from "../components/WorkerImage"
import styled from "styled-components"

const Title = styled.h2`
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  text-align: center;
  margin-bottom: 0;
`

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} - Forge Shop Design & Craft Guide`}
        description={`${post.frontmatter.description} - Forge Shop Design & Craft Guide`}
      />
      <div className="Hero">
        <div className="HeroContainer">
          <ImgHero
            imgStyle={{ objectPosition: "center top" }}
            className="Img"
            fluid={data.imageOne.childImageSharp.fluid}
          />
        </div>
        <div className="HeroGroup">
          <Title>Forge Shop Guide</Title>
          <WorkerImage filename="Logo" alt="Logo" />
          <div style={{ marginTop: "5px" }}>
            <a
              href="https://discord.gg/forgeshop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab
                size="small"
                variant="extended"
                color="primary"
                style={{
                  fontSize: "12px",
                  boxShadow: "none",
                  marginRight: "5px",
                }}
              >
                Official Discord
              </Fab>
            </a>
            <a
              href="https://discord.gg/rWMuMdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fab
                size="small"
                variant="extended"
                color="secondary"
                style={{
                  fontSize: "12px",
                  boxShadow: "none",
                  margin: 0,
                  background: "orange",
                }}
              >
                Contact Us
              </Fab>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          paddingTop: "16px",
          borderRadius: "26px 26px 0px 0px",
        }}
      >
        <Guide
          date={post.frontmatter.date}
          content={post.html}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Forge Shop Guide">
              <title>{post.frontmatter.title}</title>
              <meta name="description" content={post.frontmatter.description} />
            </Helmet>
          }
          title={post.frontmatter.title}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
