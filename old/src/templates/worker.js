import React from "react"
import MaterialTable from "material-table"
import Layout from "../components/layout"
import styled from "styled-components"
import Worker from "../components/Worker"
import SEO from "../components/seo"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import BlueprintCard from "../components/BlueprintCard"
import Blueprint from "../components/Blueprint"
import GridOnIcon from "@material-ui/icons/GridOn"
import { Link } from "gatsby"

const blueprints = require("../constants/blueprints/index")

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

const TabContainer = styled.div`
  background: "";
`

const ViewIcon = styled.div`
  width: 30px;
  height: 30px;
  background: black;
  color: white;
  border-radius: 100%;
  position: absolute;
  right: 26px;
  text-align: center;
  jusitfy-content: center;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default class WorkerPage extends React.Component {
  state = {
    value: 0,
    grid: true,
  }

  handleChange = (event, value) => {
    this.setState({ value, heroValue: value === 1 ? 0 : null })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  handleViewChange = () => {
    console.log("it worked", this.state.grid)
    this.setState({ grid: !this.state.grid })
  }

  componentDidMount() {
    const data = this.props.pageContext

    const relevantBlueprints = {}

    for (const blueprint of blueprints) {
      if (
        blueprint["Required Worker"] !== data.title &&
        blueprint["Required Worker__1"] !== data.title
      )
        continue

      if (!relevantBlueprints[blueprint.Type])
        relevantBlueprints[blueprint.Type] = [blueprint]
      else relevantBlueprints[blueprint.Type].push(blueprint)
    }

    if (!Object.values(relevantBlueprints).length) {
      this.setState({ value: 1 })
    }
  }

  render() {
    const data = this.props.pageContext
    const { value, grid } = this.state

    const relevantBlueprints = {}

    for (const blueprint of blueprints) {
      if (
        blueprint["Required Worker"] !== data.title &&
        blueprint["Required Worker__1"] !== data.title
      )
        continue

      if (!relevantBlueprints[blueprint.Type])
        relevantBlueprints[blueprint.Type] = [blueprint]
      else relevantBlueprints[blueprint.Type].push(blueprint)
    }

    return (
      <Layout>
        <SEO
          title={`Forge Shop ${data.name} Details & Stats`}
          description={
            data.description ||
            `${data.name} is one of the workers available in the Forge Shop Game. `
          }
        ></SEO>

        <Section>
          <Container />
        </Section>

        <h1 style={{ textAlign: "center" }}>
          Forge Shop: {data.name} Details
        </h1>
        <div className="CardboxGroupScroll" style={{ marginBottom: "50px" }}>
          <Resources className="CardboxGroup">
            <Worker details={data} type="worker" className="no-active" />
          </Resources>
        </div>
        <div
          style={{
            background: "white",
            paddingTop: "16px",
            borderRadius: "26px 26px 0px 0px",
          }}
        >
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
              style={{
                marginBottom: "20px",
              }}
            >
              {["BLUEPRINTS", "LEVELS"].map((name, index) => (
                <Tab
                  label={name}
                  className="button"
                  selected={true}
                  style={{
                    background: this.state.value === index ? "#5FA9FF" : "",
                    border: "none",
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
            <TabContainer style={{ background: "" }}>
              <div style={{ paddingBottom: "25px" }}>
                <ViewIcon onClick={this.handleViewChange}>
                  <GridOnIcon></GridOnIcon>
                </ViewIcon>
              </div>
              {Object.values(relevantBlueprints).map(blueprints => (
                <div className="CardboxGroupScroll">
                  {grid ? (
                    <div className="CardboxGroup">
                      {blueprints
                        .sort((a, b) => a.Tier - b.Tier)
                        .map((blueprint, index) => (
                          <Link to={`/blueprints/${blueprint.Name}`}>
                            <BlueprintCard
                              key={index}
                              details={blueprint}
                            ></BlueprintCard>
                          </Link>
                        ))}
                    </div>
                  ) : (
                    <Resources className="CardboxGroup">
                      {blueprints.map((blueprint, index) => (
                        <Link to={`/blueprints/${blueprint.Name}`}>
                          <Blueprint
                            key={index}
                            details={blueprint}
                          ></Blueprint>
                        </Link>
                      ))}
                    </Resources>
                  )}
                </div>
              ))}
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <MaterialTable
                columns={[
                  { title: "Level", field: "level" },
                  { title: "Upgrade Time", field: "time" },
                  { title: "Gold", field: "gold" },
                  { title: "Gems", field: "gems" },
                  { title: "Investments Needed", field: "needed" },
                  { title: "Total Cost", field: "cost" },
                  { title: "Effect", field: "effect" },
                ]}
                data={data.levels.map(lvl => ({
                  ...lvl,
                  gold: lvl.investments.gold.toLocaleString(),
                  gems: lvl.investments.gems.toLocaleString(),
                  needed:
                    lvl.cost === "---"
                      ? "---"
                      : Math.ceil(lvl.cost / lvl.investments.gold),
                  cost: lvl.cost.toLocaleString(),
                }))}
                options={{
                  sorting: true,
                  search: false,
                  showTitle: false,
                  showFirstLastPageButtons: false,
                  pageSize: 20,
                  emptyRowsWhenPaging: false,
                  headerStyle: {
                    textAlign: "center",
                    position: "sticky",
                    zIndex: 11,
                    top: 0,
                  },
                  cellStyle: {
                    textAlign: "center",
                  },
                }}
                style={{
                  width: "75%",
                  margin: "auto",
                }}
              />
            </TabContainer>
          )}
        </div>
      </Layout>
    )
  }
}
