import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTypes = {
    label:     PropTypes.string,
    disabled:  PropTypes.bool,
    raised:    PropTypes.bool,
    type:      PropTypes.string,
    style:     PropTypes.string,
    onClick:   PropTypes.func,
    tabIndex:  PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    raised:   true,
    type:     null,
    style:    null,
    tabIndex: 0
  }

  getRaisedClassName() {
    return this.props.raised ? `sn-button--raised` : null
  }

  getStyleClassName() {
    const { style } = this.props

    return style ? `sn-button--${style}` : null
  }

  getClassName() {
    return `sn-button ${this.getRaisedClassName()} ${this.getStyleClassName()} ${this.props.className}`
  }

  getProps() {
    const { disabled, type, tabIndex, onClick } = this.props

    return {
      disabled,
      type,
      tabIndex,
      onClick,
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