import "react-table/react-table.css"

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlueprintOverview from "../components/BlueprintOverview"
const blueprints = require("../constants/blueprints/index")

const HeroContainer = styled.div`
  background-size: cover;
  height: 300px;
  width: 100%;
  position: relative;
`
const Hero = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const IndexPage = props => {
  const relevantBlueprints = {}

  for (const blueprint of blueprints) {
    if (!relevantBlueprints[blueprint.Type])
      relevantBlueprints[blueprint.Type] = [blueprint]
    else relevantBlueprints[blueprint.Type].push(blueprint)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <HeroContainer></HeroContainer>
        <div className="HeroGroup">
          <h1>Blueprints Overview</h1>
        </div>
      </Hero>

      <BlueprintOverview blueprints={relevantBlueprints}></BlueprintOverview>
    </Layout>
  )
}
export default IndexPage
