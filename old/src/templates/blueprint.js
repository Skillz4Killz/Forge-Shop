import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import BlueprintCard from "../components/BlueprintCard"
import SEO from "../components/seo"

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const SubDescription = styled.h2`
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #000;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const crafting = [
  "Crafting Upgrade 1",
  "Crafting Upgrade 2",
  "Crafting Upgrade 3",
  "Crafting Upgrade 4",
  "Crafting Upgrade 5",
]
const craftValues = [
  "Crafts Needed",
  "Crafts Needed__1",
  "Crafts Needed__2",
  "Crafts Needed__3",
  "Crafts Needed__4",
]
const ascension = [
  "Ascension Upgrade 1",
  "Ascension Upgrade 2",
  "Ascension Upgrade 3",
]
const ascendValues = ["Shards Needed", "Shards Needed__1", "Shards Needed__2"]

const Section = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Container = styled.div`
  height: 20px;
  width: 100%;
  z-index: -1;
  position: relative;
`

export default ({ pageContext: data }) => {
  const craftingValue = crafting
    .filter(key => data[key] !== "---")
    .map(key => data[key])

  const ascensionValues = ascension.map(key => data[key])

  return (
    <Layout>
      <SEO
        title={`${data.Name} - Forge Shop Design & Craft Guide`}
        description={`Stats and details of ${data.Name} blueprint from Forge Shop Design & Craft game.`}
      />

      <Section>
        <Container />
      </Section>

      <h1 style={{ textAlign: "center" }}>Forge Shop: {data.Name} Details</h1>
      <Resources className="CardboxGroup">
        <BlueprintCard details={data} className="no-active"></BlueprintCard>
      </Resources>

      <div>
        {craftingValue.map((value, index) => (
          <div key={index}>
            <SubDescription>
              Crafting Upgrade {index + 1}: {value} [ {data[craftValues[index]]}{" "}
              ]
            </SubDescription>
          </div>
        ))}

        {ascensionValues.map((value, index) => (
          <div key={index}>
            <SubDescription>
              Ascension Upgrade {index + 1}: {value} [{" "}
              {data[ascendValues[index]]} ]
            </SubDescription>
          </div>
        ))}
      </div>
    </Layout>
  )
}
