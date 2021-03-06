import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from './../Tooltip'
import Icon from './../Icons'

class Group extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.any,
    name: PropTypes.string,
    info: PropTypes.string,
    infoAlign: PropTypes.string
  }

  static defaultProps = {
    infoAlign: 'left'
  }

  render() {
    const { label, id, className, error } = this.props

    return(
      <div
        id={id}
        className={`sn-form-group ${className || ''} ${this.errorClassName()}`}
      >
        {label && this.renderLabel()}
        {this.renderChildren()}
        {error && this.renderError()}
      </div>
    )
  }

  renderLabel() {
    return (
      <span className={this.getLabelClassName()}>
        {this.props.label}
        {this.props.info && this.renderInfo()}
      </span>
    )
  }

  getLabelClassName() {
    const { disabled, infoAlign } = this.props

    return `
      sn-form-group__label
      ${disabled ? 'sn-form-group__label--disabled' : ''}
      ${`sn-form-group__label--tooltip-${infoAlign}`}
    `
  }

  renderInfo() {
    const { info, infoAlign } = this.props

    const tooltipPosition = infoAlign === 'left'
                         ? 'right'
                         : 'left'

    return (
      <Tooltip
        message={info}
        position={`bottom-${tooltipPosition}`}
      >
        <Icon code="info" />
      </Tooltip>
    )
  }

  errorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  renderChildren() {
    const { name, children } = this.props

    if(name) {
      return children.map((child, index) => {
        return React.cloneElement(child, {
          name: name,
          key: index
        })
      })
    }

    return children
  }

  renderError() {
    return <span className="sn-form-group__message">{this.props.error}</span>
  }
}

export default Group
