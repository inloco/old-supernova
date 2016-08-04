import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTypes = {
    label:    PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    raised:   PropTypes.bool,
    type:     PropTypes.string,
    style:    PropTypes.string,
    onClick:  PropTypes.func,
    tabIndex: PropTypes.number
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

    return style !== undefined ? `sn-button--${ style }` : null
  }

  getClassName() {
    return `sn-button ${ this.getRaisedClassName() } ${ this.getStyleClassName() }`
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
    const { label, disabled, type } = this.props

    return(
      <button {...this.getProps()}>
        { this.props.label }
      </button>
    )
  }
}

export default Button