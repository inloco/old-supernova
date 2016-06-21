import React, { PropTypes } from "react"
import { getColumnClassByType } from "../../../helpers/table"

class Head extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
  }

  render() {
    const { children, type } = this.props

    return (
      <th className={ getColumnClassByType(type) }>{ children }</th>
    )
  }
}

export default Head
