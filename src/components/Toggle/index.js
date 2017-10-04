import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'

class Toggle extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const hasLabel = !!this.props.label

    return (
      <div className="sn-toggle">
        <div className={this.getButtonClasses()} onClick={this.handleClick}>
          <div className="sn-toggle__button__bar"></div>
          <div className="sn-toggle__button__circle"></div>
        </div>

        {hasLabel && this.renderLabel()}
      </div>
    )
  }

  renderLabel() {
    return (
      <div className="sn-toggle__label" onClick={this.handleClick}>
        <Text>{this.props.label}</Text>
      </div>
    )
  }

  handleClick() {
    const { value, onChange } = this.props
    const newValue = (value !== 'true').toString()

    onChange && onChange(newValue)
  }

  getButtonClasses() {
    const baseClass = 'sn-toggle__button'
    const activeClass = this.props.value === 'true' ? 'is-active' : ''

    return `${baseClass} ${activeClass}`
  }
}

export default Toggle
