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
    secondaryImage: PropTypes.string,
    tag: PropTypes.string,
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
      <div
        className='sn-chip'
        style={style}
      >
        <div className="sn-chip__inner-wrapper">
          {this.renderLeftIconOrImage()}
          {this.renderSecondaryImage()}
          <span className="sn-chip__inner-wrapper__text">{text}</span>
          {this.renderTag()}
          {this.renderRightIconOrImage()}
        </div>
      </div>
    )
  }

  renderSecondaryImage() {
    const { secondaryImage } = this.props
    if (!secondaryImage)
      return

    return <img className="sn-chip__inner-wrapper__secondary-image" src={secondaryImage} />
  }

  renderTag() {
    const { tag } = this.props
    if (!tag)
      return

    return <span className="sn-chip__inner-wrapper__tag">{tag}</span>
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
    extraClasses.push('sn-chip__inner-wrapper__icon')
    extraClasses.push(`sn-chip__inner-wrapper__icon--${reversed ? 'left' : 'right'}`)

    if (iconClick) {
      extraClasses.push('sn-chip__inner-wrapper__icon--clickable')
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
    extraClasses.push('sn-chip__inner-wrapper__image')
    extraClasses.push(`sn-chip__inner-wrapper__image--${reversed ? 'right' : 'left'}`)

    return extraClasses.join(' ')
  }
}

export default Chip
