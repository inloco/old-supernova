import React, { PropTypes } from "react"
import { getColumnClassByType } from "../../../../helpers/table"

class Data extends React.Component {
  render() {
    const { dataLabel, className } = this.props

    return (
      <td className={className} data-label={dataLabel}>{ this.props.children }</td>
    )
  }
}

export default Data