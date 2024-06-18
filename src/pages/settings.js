import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import WorkerSetting from "../components/WorkerSetting"

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  margin-bottom: 16px;
  white-space: pre-wrap;
  padding-left: 10px;
  padding-right: 10px;
`

const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  color: #ff665f;
  margin-bottom: 0;
`

const SubTitle = styled.h2`
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`

const Hero = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`

const workerData = [
  {
    title: "Workers",
    array: [
      "wallace",
      "allan",
      "maribel",
      "katarina",
      "Theodore",
      "freyja",
      "julia",
      "grimar",
    ],
    type: "worker",
    color: "#ff665f",
  },
  {
    title: "Premium Workers",
    array: ["evelyn", "roxanne"],
    type: "worker",
    color: "#ff665f",
  },
  {
    title: "Special",
    array: ["elder owen", "naya", "oscar", "argon"],
    type: "special",
    color: "orange",
  },
  {
    title: "Producers",
    array: [
      "juniper",
      "durhan",
      "jog",
      "gorza",
      "beatrice",
      "brohm",
      "tamas",
      "ismael",
    ],
    type: "resource",
    color: "lightblue",
  },
]
export default () => (
  <Layout>
    <SEO title="About" />
    <Hero>
      <Title>Your Custom Settings</Title>
      <Description>
        Note: By using this page you agree to save the information you provide
        in your devices local storage.
      </Description>
      <Description>
        We do NOT collect any of this information, it is only saved on your
        device.
      </Description>
      <Description>
        To remove this information, you can clear your browsers cache and local
        storage.
      </Description>
    </Hero>
    {workerData.map((data, index) => (
      <React.Fragment key={index}>
        <div className="Selectan">
          <SubTitle style={{ color: data.color }}>{data.title}</SubTitle>
        </div>

        <div className="CardboxGroupScroll">
          <div className="CardboxGroup">
            {/* Worker Level Settings */}
            {data.array.map((worker, workerIndex) => (
              <WorkerSetting
                key={workerIndex}
                workerName={worker}
                title={data.title}
                type={data.type}
                color={data.color}
              ></WorkerSetting>
            ))}
          </div>
        </div>
      </React.Fragment>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
