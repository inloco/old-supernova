import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTyes = {
    label:    PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    raised:   PropTypes.bool,
    type:     PropTypes.string,
    style:    PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    raised:   true,
    type:     null,
    style:    null
  }

  getRaisedClass() {
    return this.props.raised ? `sn-button--raised` : null
  }

  getStyleClass() {
    const { style } = this.props

    return style !== undefined ? `sn-button--${ style }` : null
  }

  getClassName() {
    return `sn-button ${ this.getRaisedClass() } ${ this.getStyleClass() }`
  }

  render() {
    const { label, disabled, type } = this.props

    return(
      <button
        className={ this.getClassName() }
        disabled={ disabled }
        type={ type }>
        { label }
      </button>
    )
  }
}

export default Button