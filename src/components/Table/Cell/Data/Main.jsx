import React, { PropTypes } from "react"
import { getColumnClassByType } from "../../../../helpers/table"

class Data extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <td>{ this.props.children }</td>
    )
  }
}

export default Data