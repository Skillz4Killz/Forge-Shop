import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import styled from "styled-components"
import BlueprintCard from "../components/BlueprintCard"
import Fab from "@material-ui/core/Fab"

const weapons = [
  "Axe",
  "Bow",
  "Crossbow",
  "Dagger",
  "Gun",
  "Mace",
  "Shield",
  "Spear",
  "Staff",
  "Sword",
  "Wand",
]
const armor = ["Gauntlet", "Heavy Armor", "Heavy Footwear", "Helmet"]
const lightarmor = [
  "Amulet",
  "Clothe",
  "Glove",
  "Light Armor",
  "Light Footwear",
  "Magician Hat",
  "Ring",
  "Rogue Hat",
]
const items = ["Enchantment", "Herbal Medicine", "Potion", "Runestone", "Spell"]
const TabContainer = styled.div`
  background: #f4faff;
`

export default class BlueprintOverview extends React.Component {
  state = {
    value: 0,
    tier: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleTierFilter = (event, value) => {
    this.setState({ tier: event.target.innerHTML })
  }

  makeTab(array) {
    return Object.values(this.props.blueprints)
      .filter(b => array.includes(b[0].Type))
      .map((blueprints, index) => {
        return (
          <React.Fragment key={index}>
            <div className="Selectan">
              <h1 style={{ color: "#ff665f" }}>{blueprints[0].Type}s</h1>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {blueprints
                  .filter(
                    blueprint =>
                      !this.state.tier ||
                      blueprint.Tier.toString() === this.state.tier.toString()
                  )
                  .sort((a, b) => b.Tier - a.Tier)
                  .map((blueprint, printIndex) => (
                    <BlueprintCard
                      details={blueprint}
                      key={printIndex}
                    ></BlueprintCard>
                  ))}
              </div>
            </div>
          </React.Fragment>
        )
      })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(tier => (
            <Fab
              key={tier}
              size="small"
              variant="extended"
              color="primary"
              style={{
                fontSize: "12px",
                boxShadow: "none",
                marginRight: "5px",
                background: "#ff665f",
              }}
              onClick={this.handleTierFilter}
            >
              {tier}
            </Fab>
          ))}
        </div>
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
            {["Weapons", "Heavy", "Light", "Items"].map((name, index) => (
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
        {value === 0 && <TabContainer>{this.makeTab(weapons)}</TabContainer>}
        {value === 1 && <TabContainer>{this.makeTab(armor)}</TabContainer>}
        {value === 2 && <TabContainer>{this.makeTab(lightarmor)}</TabContainer>}
        {value === 3 && <TabContainer>{this.makeTab(items)}</TabContainer>}
      </div>
    )
  }
}
