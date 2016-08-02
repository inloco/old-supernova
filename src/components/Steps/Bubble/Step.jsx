import React, { PropTypes } from "react"

class Step extends React.Component {
  static propTyes = {
    label:  PropTypes.string.isRequired,
    status: PropTypes.string
  }

  getStatusClassName() {
    const { status } = this.props

    return status ? `is-${status}` : ""
  }

  render() {
    return (
      <li className={this.getStatusClassName()}>
        {this.props.label}
      </li>
    )
  }
}

export default Step