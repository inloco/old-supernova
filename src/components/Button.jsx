import React, { PropTypes } from "react"
import Icon from "./Icon"

class Button extends React.Component {
  static propTyes = {
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    btnType: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    iconSize: PropTypes.string,
    iconName: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.string,
    secondaryStyle: PropTypes.string,
    isModal: PropTypes.bool,
    onClick:  PropTypes.func,
    name: PropTypes.string
  }

  static defaultProps = {
    style: "",
    secondaryStyle: "",
    isDisabled: false,
    isModal: false
  }

  getButtonHref() {
    const { href } = this.props

    return (
      <a href={ href }>
        { this.getButton() }
      </a>
    )
  }

  getModalClass() {
    return(
      "close"
    )
  }

  getClasses() {
    const { btnType, size, style, secondaryStyle } = this.props

    return(
      `btn btn-${btnType} ${style} btn-${size} withripple ${secondaryStyle}`
    )
  }

  getIcon() {
    const { iconSize, iconName } = this.props

    return(
      iconName !== undefined ? <Icon size={ iconSize } name={ iconName } /> : null
    )
  }

  getLabel() {
    const { label } = this.props

    return(
      <span className="button-txt">{ label }</span>
    )
  }

  getButton() {
    const { id, btnType, type, isDisabled, isModal, label, name } = this.props
    const disabledOpt = { disabled: isDisabled }

    return (
      <button id={ id !== undefined ? id : null }
              type={ type }
              className={ (isModal && btnType === undefined) ?
                            this.getModalClass() :
                            this.getClasses() }
              data-dismiss={ isModal ? "modal" : null }
              { ...disabledOpt }
              onClick={this.props.onClick}
              name={ name !== undefined ? name : null }>
        { this.getIcon() }
        { label !== undefined ? this.getLabel() : null }
        <div className="ripple-wrapper"></div>
      </button>
    )
  }

  render() {
    const { href } = this.props

    return (
      href !== undefined ? this.getButtonHref() : this.getButton()
    )
  }
}

export default Button
