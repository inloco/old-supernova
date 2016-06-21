import React, { PropTypes } from "react"

class Logo extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }

  render() {
    const { href, imageName, src } = this.props

    return (
      <div className="brand">
        <a href={ href }>
          <img data-image={ imageName } src={ src }/>
        </a>
      </div>
    )
  }
}

export default Logo
