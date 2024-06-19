import React from "react"
import { Link, graphql } from "gatsby"
import Fab from "@material-ui/core/Fab"
import styled from "styled-components"
import Logo from "../components/Logo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const queryExample = `
const fetch = require("node-fetch")

const data = await fetch(
  "https://api.forgeshop.xyz/",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {
        blueprints {
          name
        }
      }
    })
  }).then(res => res.json())`

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: darkblue;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Description = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Code = styled.code`
  background-color: #eee;
  border: 1px solid #999;
  margin: auto;
  display: block;
  padding: 20px;
  font-size: 12px;
`

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      description="Forge Shop Design & Craft API that provides detailed statistics for blueprints, workers, champions and much more. This API was created for the purpose of helping community developers be able to create amazing projects much faster and easier."
    />
    <div className="Hero">
      <div className="HeroContainer"></div>
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

    <Title>Forge Shop Design & Craft API Documentation</Title>

    <Subtitle>Welcome</Subtitle>
    <Description>
      The Forge Shop Design & Craft API makes it easier for other community
      developers to be able to have quick access to in-game data related to
      blueprints, workers, champions and more, which developers can use to
      create amazing projects for the entire Forge Shop Community. Please be
      aware that this is my very first API created so it may not be entirely up
      to API standards. Together, I am sure we can create the best API for the
      community so I am very much open to Pull Requests!
    </Description>

    <Subtitle>Free/Unlimited/OpenSource Use API</Subtitle>
    <Description>
      Note: This is a community created API. This API is provided as is free of
      charge. Anyone can use it, with no rate limits. I hope to keep it this way
      but if it is abused and breaks the bandwidth limits in place on the VPS, I
      will have to add restrictions/limitations to it. The API is open source so
      you can always clone and maintain your own API.{" "}
      <a href="https://github.com/Skillz4Killz/shop-titans-api">API Github</a>
    </Description>

    <Subtitle>GraphQL API</Subtitle>
    <Description>
      This is NOT a REST API. This API was built with GraphQL. Nonetheless, data
      returned from the API will be in JSON format.
    </Description>

    <Subtitle>Interactive Experience</Subtitle>
    <Description>
      We built a page on our website at{" "}
      <Link to="api.forgeshop.xyz">https://api.forgeshop.xyz</Link> so that you
      could interact with the API to see how it works. You can build entire
      queries on this page so that you can simply copy and paste your desired
      queries into your own applications. Cool right?
    </Description>

    <Subtitle>Need Help?</Subtitle>
    <Description>
      Use the contact us button to join my discord server and reach out to me
      anytime.
    </Description>

    <Subtitle>Getting Started</Subtitle>
    <Description>
      In order to fetch data from the API, you will send a POST request to
      https://api.forgeshop.xyz. Below is an example of how to retrieve the data
      from the API with Javascript.
    </Description>
    <pre>
      <Code>{queryExample}</Code>
    </pre>

    <Subtitle>Goals / Future Roadmap</Subtitle>
    <Description>
      One of the things I want to consider in the API is having each endpoint
      returned accompanied with a url from either imgur or some other free image
      hosting service that can provide easy access to assets. So for example,
      someone could send a query for a blueprint and it would return a image url
      for each blueprint.
    </Description>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/Banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
