import React, { PropTypes } from "react"
import { bindItems } from "../../helpers/sidebar"

class Sidebar extends React.Component {
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
      <div className="side">
        <div className="geral">
          <ul className="main-menu">
            { bindItems(this.props.children, this) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
