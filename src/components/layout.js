import "./layout.css"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import StickyFooter from "react-sticky-footer"

import Header from "./header"
import BottomNav from "./BottomNav"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            {
              name: "keywords",
              content:
                "forge shop, wiki, forgeshopwiki, forgeshop, forge shop wiki, stwiki, st",
            },
            {
              property: "og:image",
              content: "https://i.imgur.com/9Mq9ePq.png",
            },
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, viewport-fit=cover",
            },
          ]}
        >
          <meta name="title" content="Forge Shop Wiki" />
          <meta name="description" content="A Forge Shop Wiki" />

          <meta
            name="keywords"
            content="forge shop, wiki, forgeshopwiki, forgeshop, forge shop wiki, stwiki, st"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Forge Shop Wiki" />
          <meta property="og:description" content="A Forge Shop Wiki" />
          <meta property="og:image" content="https://i.imgur.com/9Mq9ePq.png" />
          <meta property="og:url" content="https://forgeshop.netlify.com/" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://forgeshop.netlify.com"
          />
          <meta property="twitter:title" content="Forge Shop Wiki" />
          <meta property="twitter:description" content="A Forge Shop Wiki" />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/9Mq9ePq.png"
          />
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <StickyFooter
          className="footer"
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "",
            padding: "1rem",
            fontSize: "12px",
            color: "black",
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "600",
          }}
          stickyStyles={{
            backgroundColor: "",
            padding: "1rem",
            fontSize: "12px",
            color: "white",
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "800",
          }}
        >
          <p>Copyright © 2019 Forge Shop Wiki</p>
          <p>
            Forge Shop Wiki is not affiliated or part of Kabam Games, Inc. All
            Forge Shop copyrights and art assets belong to Kabam Games Inc.
          </p>
          Made by{" "}
          <a
            style={{ color: "#daa54e" }}
            href="https://twitter.com/AC1design"
          >
            AngeloC
          </a>{" "}
          &{" "}
          <a
            style={{ color: "#daa54e" }}
            href="https://discord.gg/rWMuMdk"
          >
            Skillz4Killz
          </a>
          <p>Privacy Policy: We don’t store your data.</p>
        </StickyFooter>

        <BottomNav className="bottomNav" />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
