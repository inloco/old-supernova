import React, { PropTypes } from "react"

class Step extends React.Component {
  static propTypes = {
    label:  PropTypes.string.isRequired,
    index:  PropTypes.number.isRequired,
    status: PropTypes.string
  }

  static defaultProps = {
    active: false
  }

  getStatusClassName() {
    const { status } = this.props

    return status ? `is-${status}` : ""
  }

  getClassName() {
    return `sn-steps__item ${this.getStatusClassName()}`
  }

  render() {
    const { label, index } = this.props

    return (
      <div className={this.getClassName()}>
        <i className="sn-steps__number-icon">{index + 1}</i>
        {label}
      </div>
    )
  }
}

export default Step