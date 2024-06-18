import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            relativePath: {
              regex: "/Stat Indicators|Item Types|Items|Resources|Currencies|Components|Portraits/"
            }
          }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(height: 15) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.endsWith(`/${props.filename}.png`)
      })

      if (!image) return null

      return (
        <Img
          alt={props.alt}
          fixed={image.node.childImageSharp.fixed}
          style={
            props.style || {
              position: "relative",
              margin: "auto",
              display: "block",
            }
          }
        />
      )
    }}
  />
)
