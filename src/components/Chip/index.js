import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../Icons'

class Chip extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    
    leftIconUrl: PropTypes.string,
    leftIconUrlAltText: PropTypes.string,
    leftIconCode: PropTypes.string,
    leftIconColor: PropTypes.string,
    leftIconClick: PropTypes.func,

    rightIconUrl: PropTypes.string,
    rightIconUrlAltText: PropTypes.string,
    rightIconCode: PropTypes.string,
    rightIconColor: PropTypes.string,
    rightIconClick: PropTypes.func
  }

  render() {
    const {
      textColor,
      backgroundColor
    } = this.props

    const style = {
      backgroundColor: backgroundColor,
      color: textColor
    }

    return (
      <div 
        className="sn-chip"
        style={style}
      >
        {this.getIconOrImage("left")}
        {this.props.text}
        {this.getIconOrImage("right")}
      </div>
    )
  }

  /**
   * Builds the icon or image extra classes according to the target 
   * side and element
   * @param {*} side the side (left or right) where the icon or image will be rendered
   * @param {*} element the icon chip element (image or icon)
   */
  getExtraClasses(side, element) {
    let extraClasses = []
    extraClasses.push(`sn-chip__${element}`)
    extraClasses.push(`sn-chip__${element}--${side}`)

    // Checking if it's clickable
    if (side === 'left' && this.props.leftIconClick
        || side === 'right' && this.props.rightIconClick) {
      extraClasses.push(`sn-chip__${element}--clickable`)
    }

    return extraClasses.join(" ")
  }

  /**
   * Checks whether a Supernova icon or a image url was provides and
   * renders accordingly on the side received
   * @param {*} side the side (left or right) where the icon or image will be rendered
   */
  getIconOrImage(side) {
    const iconCode = side === "left" ? this.props.leftIconCode : this.props.rightIconCode
    const iconUrl = side === "left" ? this.props.leftIconUrl : this.props.rightIconUrl
    const iconAltText = side === "left" ? this.props.leftIconUrlAltText : this.props.rightIconUrlAltText
    const iconClick = side === "left" ? this.props.leftIconClick : this.props.rightIconClick

    if (iconCode) {
      const extraClasses = this.getExtraClasses(side, "icon")
      const iconColor = side === "left" ? this.props.leftIconColor : this.props.rightIconColor

      return (
        <Icon 
          className={extraClasses}
          code={iconCode}
          onClick={iconClick}
          color={iconColor}
        />
      )
    } else if (iconUrl) {
      const extraClasses = this.getExtraClasses(side, "image")
      const iconAltText = side === "left" ? this.props.leftIconUrlAltText : this.props.rightIconUrlAltText

      return (
        <img
          className={extraClasses}
          src={iconUrl}
          alt={iconAltText || ""}
          onClick={iconClick}
        />
      )
    }
  }
}

export default Chip