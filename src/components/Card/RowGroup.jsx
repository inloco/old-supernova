import React, { PropTypes } from "react"

class RowGroup extends React.Component {
  render() {
    return (
      <div className="sn-card__row--group">
        {this.props.children}
      </div>
    )
  }
}

export default RowGroup