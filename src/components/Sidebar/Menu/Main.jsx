import React, { PropTypes } from "react"
import { bindItems } from "../../../helpers/sidebar"

class Menu extends React.Component {
  constructor(props) {
    super()

    this.state = { currentPath: props.currentPath }
  }

  static propTyes = {
    children: PropTypes.node.isRequired,
    currentPath: PropTypes.string
  }

  static defaultProps = {
    currentPath: ""
  }

  handleClick(href) {
    this.setState({
      currentPath: href
    })
  }

  render() {
    const{ children } = this.props

    return (
      <ul className="main-menu">
        { bindItems(children, this) }
      </ul>
    )
  }
}

export default Menu
