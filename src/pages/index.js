import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"
import Fab from "@material-ui/core/Fab"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/Homepage"
import Logo from "../components/Logo"

const IndexPage = props => (
  <Layout>
    <SEO
      title="Forge Shop Design & Craft Stats & Wiki"
      description="Forge Shop is a simulation RPG game that consists of building your own shop within a fantasy kingdom. Craft items, gear up heroes and embark on adventures. Learn and improve your gameplay by reading all our guides, viewing all the statistics about each blueprint and worker to perfect your craftsmenship and among the top shop keepers."
    />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
      </div>
      <div className="HeroGroup">
        <Logo filename="Logo" alt="Logo" />
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
        background: "#f4faff",
        paddingTop: "16px",
        borderRadius: "26px 26px 0px 0px",
      }}
    >
      <Homepage />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/Banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
