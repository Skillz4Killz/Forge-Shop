import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: file(relativePath: { eq: "Logo.png" }) {
          relativePath
          name
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          alt={props.alt}
          fixed={data.images.childImageSharp.fixed}
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
