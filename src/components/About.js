import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import styled from "styled-components"

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Item = styled.p`
  font-size: 14px;
  color: #406081;
  text-align: center;
`

const contributors = [
  // { name: "LordAzuRa", guild: "Guild Master of Buy The Way (#42)" },
  // { name: "hsidnomeL", guild: "River Echo" },
]

const TabContainer = styled.div`
  padding: 24px;
  background: "#F4FAFF";
`

const UnorderedList = styled.ul`
  list-style-type: none;
`

const version1 = [
  // { value: "Homepage With Tabs showing Workers and Heroes", done: true },
  // { value: "Each worker has it's own individual page.", done: true },
  // {
  //   value: "PWA to allow users to create an App on their devices.",
  //   done: true,
  // },
  // { value: "Credits to contributors.", done: true },
  // { value: "Make a detailed roadmap.", done: true },
  // { value: "Start a changelog.", done: true },
  // { value: "Add Champion tab with each champions own box.", done: true },
  // { value: "Champion pages showing rank details and stories.", done: true },
  // { value: "Blueprints page: an overview of all blueprints", done: true },
]

const version2 = [
  { value: "View the latest news related to forge shop.", done: false },
  {
    value: "View fan art, memes, forge shop community projects and much more.",
    done: false,
  },
  {
    value: "Promote your Youtube videos!",
    done: false,
  },
  {
    value: "When streamers go live, they will be promoted on the website!",
    done: false,
  },
]

const changelog = [
  "Launched Verson 1.0 of the Forge Shop Wiki!",
]

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { value } = this.state

    return (
      <div width="100%">
        <AppBar
          position="static"
          color="default"
          style={{
            background: "none",
            width: "max-content",
            margin: "0 auto",
            boxShadow: "none",
          }}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            TabIndicatorProps={{
              style: { visibility: "hidden" },
            }}
          >
            {["Developers", "Roadmap", "Changelog"].map((name, index) => (
              <Tab
                label={name}
                className="button"
                selected={true}
                style={{
                  background: this.state.value === index ? "#5FA9FF" : "",
                  border: "1px solid grey",
                  borderRadius: "50px",
                  fontSize: "12px",
                  marginRight: "16px",
                }}
                key={index}
              />
            ))}
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Description>
              Hey there! We made this wiki with a focus on user interface and
              user experience so that everyone can have the best possible
              experience with Forge Shop.
            </Description>
            <Description>
              We wanted to take a moment and thank everyone that uses this
              project, everyone that helped contribute to it, and most of all to
              Kabam for making this amazing game.
            </Description>
            <Title>Developer</Title>
            <Description>@skillz on Discord</Description>

            <Title>Major Contributors</Title>
            {contributors.map((contributor, index) => (
              <div key={index}>
                <Description>
                  {contributor.name} from {contributor.guild}
                </Description>
              </div>
            ))}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Description>
              This roadmap can change at any time based on user feedback.
            </Description>
            {[
              { title: "Version 1: Public Launch", details: version1 },
              { title: "Version 2: News", details: version2 },
            ].map((roadmap, index) => (
              <React.Fragment>
                <div className="Selectan">
                  <h1 style={{ color: "#ff665f" }}>{roadmap.title}</h1>
                </div>
                <UnorderedList>
                  {roadmap.details.map((item, versionIndex) => (
                    <li key={versionIndex}>
                      <Item>
                        <span
                          role="img"
                          aria-labelledby="jsx-a11y/accessible-emoji"
                        >
                          {item.done ? "✅" : "📝"}
                        </span>{" "}
                        {item.value}
                      </Item>
                    </li>
                  ))}
                </UnorderedList>
              </React.Fragment>
            ))}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div>
              <Title>Latest Update:</Title>
              <UnorderedList>
                {changelog.map((item, index) => (
                  <li key={index}>
                    <Description>
                      <span
                        role="img"
                        aria-labelledby="jsx-a11y/accessible-emoji"
                      >
                        ✅
                      </span>{" "}
                      {item}
                    </Description>
                  </li>
                ))}
              </UnorderedList>
            </div>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default FullWidthTabs
