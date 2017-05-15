import React from "react"
import PropTypes from "prop-types"

class Link extends React.Component {
  static propTyes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render() {
    const { href, label } = this.props

    return (
      <span>
        <a href={ href } target="_blank">{ label }</a>
        <span className="divider">|</span>
      </span>
    )
  }
}

export default Link
