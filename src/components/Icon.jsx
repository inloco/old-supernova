import React, { PropTypes } from "react"

class Icon extends React.Component {
  static propTyes = {
    size: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const{ size, name } = this.props

    return (
      <span className={ "icon-" + size + " " + name }/>
    )
  }
}

export default Icon
