import React, { PropTypes } from "react"

class List extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div className={this.getCardListClassName()}>
        {this.props.children}
      </div>
    )
  }

  getCardListClassName() {
    return `
      sn-card__list
      ${this.getStripClassName()}
    `
  }

  getStripClassName() {
    return this.props.strip ? 'sn-card__list--strip' : ''
  }
}

export default List
