import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTyes = {
    label: PropTypes.string.isRequired,
    btnType: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.string,
    secondaryStyle: PropTypes.string
  }

  static defaultProps = {
    style: "",
    secondaryStyle: ""
  }

  getButtonHref() {
    const { href } = this.props

    return (
      <a href={ href }>
        { this.getButton() }
      </a>
    )
  }

  getClasses() {
    const { btnType, size, style, secondaryStyle } = this.props

    return(
      "btn btn-" + btnType + " " + style + " btn-" + size + " withripple " + secondaryStyle
    )
  }

  getIcon() {
    const { icon } = this.props

    return(
      icon !== undefined ? <span className={ "icon " + icon }></span> : null
    )
  }

  getButton() {
    const { id, label, type, isDisabled } = this.props
    const disabledOpt = { disabled: isDisabled }

    return (
      <button id={ id !== undefined ? id : null }
              type={ type }
              className={ this.getClasses() }
              { ...disabledOpt }>
        { this.getIcon() }
        <span className="button-txt">
          { label }
        </span>
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
