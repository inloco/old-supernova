import React from "react"
import PropTypes from "prop-types"
import { getColumnClassByType } from "../../../../helpers/table"

class Data extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string
  }

  render() {
    const { children, type } = this.props

    return (
      <td className={ getColumnClassByType(type) }>{ children }</td>
    )
  }
}

export default Data
