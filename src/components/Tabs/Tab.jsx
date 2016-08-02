import React, { PropTypes } from "react"

class Tab extends React.Component {
  static propTypes = {
    label:       PropTypes.string.isRequired,
    active:      PropTypes.bool,
    handleClick: PropTypes.func
  }

  getActiveClassName() {
    return this.props.active ? "is-active" : ""
  }

  getClassName() {
    return `sn-tabs--item ${this.getActiveClassName()}`
  }

  render() {
    const { handleClick, label } = this.props

    return (
      <li className={this.getActiveClassName()}>
        <a href="#" onClick={handleClick}>{label}</a>
      </li>
    )
  }
}

export default Tab
