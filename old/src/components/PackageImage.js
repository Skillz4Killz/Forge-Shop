import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            relativePath: { regex: "/Packs/" }
          }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(height: 30) {
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
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) return null

      return (
        <Img
          alt={props.alt}
          fixed={image.node.childImageSharp.fixed}
          style={
            props.style || {
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }
          }
        />
      )
    }}
  />
)

export default Image
