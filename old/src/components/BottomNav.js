import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import SettingsIcon from "@material-ui/icons/Settings"
import HomeIcon from "@material-ui/icons/Home"
import AssignmentIcon from "@material-ui/icons/Assignment"
import ListIcon from "@material-ui/icons/List"
import InfoIcon from "@material-ui/icons/Info"
import { Link } from "gatsby"

export default class extends React.Component {
  state = {
    tab: "home",
  }

  handleChange = (event, newValue) => {
    this.setState({ tab: newValue })
  }

  render() {
    return (
      <BottomNavigation
        value={this.state.tab}
        onChange={this.handleChange}
        className="bottomNav"
      >
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/guides">
          <BottomNavigationAction
            label="Guides"
            icon={<AssignmentIcon />}
          />
        </Link>
        <Link to="/overview">
          <BottomNavigationAction
            label="Blueprints"
            icon={<ListIcon />}
          />
        </Link>
        <Link to="/settings">
          <BottomNavigationAction
            label="Settings"
            icon={<SettingsIcon />}
          />
        </Link>
        <Link to="/about">
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
          />
        </Link>
      </BottomNavigation>
    )
  }
}
