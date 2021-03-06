import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    raised: PropTypes.bool,
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    theme: PropTypes.string,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    noHover: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    disabled: false,
    raised: false,
    fullWidth: false,
    loading: false,
    type: "button",
    theme: null,
    noHover: false
  }

  render() {
    return(
      <button {...this.getProps()}>
        {this.renderContent()}
      </button>
    )
  }

  renderContent() {
    const { label, children, loading, loadingText } = this.props

    return loading
            ? loadingText
            : (label || children)
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

  getNoHoverClassName() {
    const { noHover } = this.props

    return noHover ? 'sn-button--no-hover' : ''
  }

  getClassName() {
    return `
      sn-button
      ${this.getRaisedClassName()}
      ${this.getFullWidthClassName()}
      ${this.getStyleClassName()}
      ${this.props.className}
      ${this.getSizeClassName()}
      ${this.getNoHoverClassName()}
    `
  }

  getProps() {
    const { disabled, type, tabIndex, onClick, name, loading } = this.props

    return {
      disabled: disabled || loading,
      type,
      tabIndex,
      onClick,
      name,
      className: this.getClassName()
    }
  }
}

export default Button
