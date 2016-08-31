import React, { PropTypes } from "react"
import { getColumnClassByType } from "../../../helpers/table"

class Head extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, type } = this.props

    return (
      <th>{ children }</th>
    )
  }
}

export default Head
