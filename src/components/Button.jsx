import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTyes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
    icon: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.string,
    secondaryStyle: PropTypes.string
  }

  getButtonHref() {
    const { href } = this.props

    return (
      <a href={ href }>
        { this.getButton() }
      </a>
    )
  }

  getButton() {
    const { id, type, label, icon, size, style, secondaryStyle, isDisabled } = this.props
    let ops = {}

    if(isDisabled) {
      ops.Disabled = "true"
    }

    return (
      <button id={ id !== undefined ? id : null }
              type="button"
              className={ "btn btn-" +
                      type +
                      " " +
                      style +
                      " btn-" +
                      size +
                      " withripple " +
                      secondaryStyle }
              { ...ops }>
        <span className={ "icon " + icon }></span>
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
