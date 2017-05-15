import React from "react"
import PropTypes from "prop-types"
import CellData from "./Main"

class Title extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
  }

  render() {
    const { children, href } = this.props

    return (
      <CellData type="title">
        <a href={ href }>
          <span className="table-item-title">{ children }</span>
        </a>
      </CellData>
    )
  }
}

export default Title
