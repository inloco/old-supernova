import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import classNames from 'classnames'

class Toggle extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { label } = this.props
    const hasLabel = !!label

    return (
      <div className={this.getClassName()}>
        <div className={this.getButtonClasses()} onClick={this.handleClick}>
          <div className='sn-toggle__button__bar'></div>
          <div className='sn-toggle__button__circle'></div>
        </div>

        {hasLabel && this.renderLabel()}
      </div>
    )
  }

  getClassName() {
    const { className, readOnly } = this.props

    return classNames(
      'sn-toggle',
      className,
      { 'is-read-only': readOnly }
    )
  }

  renderLabel() {
    return (
      <div className='sn-toggle__label' onClick={this.handleClick}>
        <Text>{this.props.label}</Text>
      </div>
    )
  }

  handleClick() {
    const { value, readOnly, onChange } = this.props
    if (readOnly)
      return

    const newValue = (value !== 'true').toString()

    onChange && onChange(newValue)
  }

  getButtonClasses() {
    return classNames('sn-toggle__button', {
      'is-active': this.props.value === 'true'
      }
    )
  }
}

export default Toggle
