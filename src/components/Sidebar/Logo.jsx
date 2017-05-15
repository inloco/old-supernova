import React from "react"
import PropTypes from "prop-types"

class Logo extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }

  render() {
    const { href, src } = this.props

    return (
      <div className="brand">
        <a href={ href }>
          <img src={ src }/>
        </a>
      </div>
    )
  }
}

export default Logo
