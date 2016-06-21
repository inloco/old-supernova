import React, { PropTypes } from "react"

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