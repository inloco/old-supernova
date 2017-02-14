import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTypes = {
    label:       PropTypes.string,
    disabled:    PropTypes.bool,
    raised:      PropTypes.bool,
    fullWidth:   PropTypes.bool,
    type:        PropTypes.string,
    buttonStyle: PropTypes.string,
    onClick:     PropTypes.func,
    tabIndex:    PropTypes.number,
    className:   PropTypes.string,
    name:        PropTypes.string,
    size:        PropTypes.string
  }

  static defaultProps = {
    disabled:    false,
    raised:      false,
    fullWidth:   false,
    type:        "button",
    buttonStyle: null
  }


  getRaisedClassName() {
    return this.props.raised ? `sn-button--raised` : null
  }

  getFullWidthClassName() {
    return this.props.fullWidth ? `sn-button--full-width` : null
  }

  getStyleClassName() {
    const { buttonStyle } = this.props

    return buttonStyle ? `sn-button--${buttonStyle}` : null
  }

  getSizeClassName() {
    const { size } = this.props

    return size ? `sn-button--${size}` : ""
  }

  getClassName() {
    return `
      sn-button
      ${this.getRaisedClassName()}
      ${this.getFullWidthClassName()}
      ${this.getStyleClassName()}
      ${this.props.className}
      ${this.getSizeClassName()}`
  }

  getProps() {
    const { disabled, type, tabIndex, onClick, name } = this.props

    return {
      disabled,
      type,
      tabIndex,
      onClick,
      name,
      className: this.getClassName()
    }
  }

  render() {
    const { label, children } = this.props

    return(
      <button {...this.getProps()}>
        { label || children }
      </button>
    )
  }
}

export default Button
