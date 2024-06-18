import "./header.css"
import React from "react"
import { Link } from "gatsby"
import HeaderLogo from "./HeaderLogo"

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/" style={{ marginLeft: "-10px" }}>
            <HeaderLogo filename="Logo" />
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              right: "16px",
              top: "6px",
              position: "absolute",
              margin: "10px",
            }}
          >
            <Link
              to="/overview"
              style={{ color: this.state.hasScrolled ? "white" : "" }}
            >
              Blueprints
            </Link>
            <Link
              to="/guides"
              style={{ color: this.state.hasScrolled ? "white" : "" }}
            >
              Guides
            </Link>
            <Link
              to="/settings"
              style={{ color: this.state.hasScrolled ? "white" : "" }}
            >
              Settings
            </Link>
            <Link
              to="/about"
              style={{ color: this.state.hasScrolled ? "white" : "" }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

// <Link to="/">Guides(soon)</Link>
// <Link to="/">News(soon)</Link>
// <Link to="/">Guilds(soon)</Link>
