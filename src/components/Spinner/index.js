import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Spinner extends React.Component {
  static propTypes = {
    iconUrl: PropTypes.string.isRequired,
    altText: PropTypes.string,
    forceRotation: PropTypes.bool
  }

  render() {
    const { iconUrl } = this.props

    return (
      <div className={this.getClassName()}>
        <img
          className="sn-spinner__icon"
          src={iconUrl}
          alt={this.props.altText || ""} />
      </div>
    )
  }

  getRotationClassName() {
    return this.props.forceRotation ? 'sn-spinner--rotate' : ''
  }

  getClassName() {
    return `sn-spinner ${this.getRotationClassName()}`
  }
}

export default Spinner
