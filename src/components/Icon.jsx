import React, { PropTypes } from "react"

class Icon extends React.Component {
  static propTyes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string
  }

  getIconClass() {
    const{ size, name } = this.props

    return (
      size !== undefined ? "icon-" + size + " " + name : "icon " + name
    )
  }

  render() {
    const{ size, name } = this.props

    return (
      <span className={ this.getIconClass() }/>
    )
  }
}

export default Icon
