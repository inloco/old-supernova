import React from 'react'
import PropTypes from 'prop-types'

class SnBrand extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    collapsedSrc: PropTypes.string
  }

  render() {
    return (
      <div className='sn-brand'>
        { this.props.collapsedSrc && this.renderCollapsedImg() }
        <img src={ this.props.src } alt={ this.props.alt } />
      </div>
    )
  }

  renderCollapsedImg() {
    return (
      <img
        className='sn-brand__img__collapsed'
        src={ this.props.collapsedSrc }
        alt={ this.props.alt }
      />
    )
  }
}

export default SnBrand