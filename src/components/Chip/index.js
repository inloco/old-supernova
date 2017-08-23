import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../Icons'

class Chip extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAltText: PropTypes.string,
    iconCode: PropTypes.string,
    iconColor: PropTypes.string,
    iconClick: PropTypes.func,
    reversed: PropTypes.any
  }

  render() {
    const {
      text,
      textColor,
      backgroundColor
    } = this.props

    const style = {
      color: textColor,
      backgroundColor: backgroundColor
    }

    return (
      <div>
        <div
          className='sn-chip'
          style={style}
        >
          <div className="sn-chip__wrapper">
            {this.renderLeftIconOrImage()}
            <span className="sn-chip__text">{text}</span>
            {this.renderRightIconOrImage()}
          </div>
        </div>
      </div>
    )
  }

  renderLeftIconOrImage() {
    const {
      reversed,
      iconCode,
      imageUrl
    } = this.props

    if (reversed && iconCode) return this.renderIcon()
    
    if (!reversed && imageUrl) return this.renderImage()
  }

  renderRightIconOrImage() {
    const {
      reversed,
      iconCode,
      imageUrl
    } = this.props

    if (reversed && imageUrl) return this.renderImage()
    
    if (!reversed && iconCode) return this.renderIcon()
  }

  renderIcon() {
    const extraClasses = this.getIconClasses()
    const {
      iconColor,
      iconClick,
      iconCode
    } = this.props

    return (
      <Icon 
        className={extraClasses}
        code={iconCode}
        onClick={iconClick}
        color={iconColor}
      />
    )
  }

  getIconClasses() {
    const {
      reversed,
      iconClick
    } = this.props

    let extraClasses = []
    extraClasses.push('sn-chip__icon')
    extraClasses.push(`sn-chip__icon--${reversed ? 'left' : 'right'}`)

    if (iconClick) {
      extraClasses.push('sn-chip__icon--clickable')
    }

    return extraClasses.join(' ')
  }

  renderImage() {
    const extraClasses = this.getImageClasses()
    const {
      imageUrl,
      imageAltText
    } = this.props

    return (
      <img
        className={extraClasses}
        src={imageUrl}
        alt={imageAltText || ''}
      />
    )
  }

  getImageClasses() {
    const {
      reversed
    } = this.props

    let extraClasses = []
    extraClasses.push('sn-chip__image')
    extraClasses.push(`sn-chip__image--${reversed ? 'right' : 'left'}`)

    return extraClasses.join(' ')
  }
}

export default Chip