import React, { PropTypes } from "react"

class Button extends React.Component {
  static propTyes = {
    label:    PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    raised:   PropTypes.bool,
    type:     PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    raised:   true
  }

  getRaisedClass() {
    return this.props.raised ? `sn-button--raised` : null
  }

  getTypeClass() {
    const { type } = this.props

    return type !== undefined ? `sn-button--${ type }` : null
  }

  getClassName() {
    return `sn-button ${ this.getRaisedClass() } ${ this.getTypeClass() }`
  }

  render() {
    const { label, disabled } = this.props

    return(
      <button
        className={ this.getClassName() }
        disabled={ disabled }>
        { label }
      </button>
    )
  }
}

export default Button