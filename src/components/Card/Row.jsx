import React, { PropTypes } from "react"

class Row extends React.Component {
  getTitleClassName() {
    return this.props.isTitle ? `sn-card__row--title` : ""
  }

  getClassName() {
    return `sn-card__row ${this.getTitleClassName()}`
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    )
  }
}

export default Row