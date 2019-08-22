import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 56, height: 56) {
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
          style={{ position: "relative",
            marginTop: "10px" }}
        />
      )
    }}
  />
)

export default Image
