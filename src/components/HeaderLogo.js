import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: file(relativePath: { eq: "Logo.jpg" }) {
          relativePath
          name
          childImageSharp {
            fixed(height: 25) {
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
          style={{
            top: "10px",
          }}
        />
      )
    }}
  />
)

export default Image
