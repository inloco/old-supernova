import React, { PropTypes } from "react"

class Item extends React.Component {
  static propTyes = {
    label:  PropTypes.string.isRequired,
    index:  PropTypes.number.isRequired,
    done:   PropTypes.bool,
    active: PropTypes.bool
  }

  static defaultProps = {
    done:   false,
    active: false
  }

  getDoneClassName() {
    return this.props.done ? "is-done" : ""
  }

  getActiveClassName() {
    return this.props.active ? "is-active" : ""
  }

  getClassName() {
    return `sn-steps__item ${this.getDoneClassName()} ${this.getActiveClassName()}`
  }

  render() {
    const { label, index } = this.props

    return (
      <div className={this.getClassName()}>
        <i className="sn-steps__number-icon">{index}</i>
        {label}
      </div>
    )
  }
}

export default Item