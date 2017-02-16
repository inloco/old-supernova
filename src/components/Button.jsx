import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTypes = {
    label:       PropTypes.string,
    disabled:    PropTypes.bool,
    raised:      PropTypes.bool,
    fullWidth:   PropTypes.bool,
    type:        PropTypes.string,
    theme: PropTypes.string,
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
    theme: null
  }


  getRaisedClassName() {
    return this.props.raised ? `sn-button--raised` : null
  }

  getFullWidthClassName() {
    return this.props.fullWidth ? `sn-button--full-width` : null
  }

  getStyleClassName() {
    const { theme } = this.props

    return theme ? `sn-button--${theme}` : null
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
