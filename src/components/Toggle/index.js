import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'

class Toggle extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
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
      <div className="sn-toggle" onClick={this.handleClick}>
        <div className={this.getButtonClasses()}>
          <div className="sn-toggle__button__bar"></div>
          <div className="sn-toggle__button__circle"></div>
        </div>
        <div className="sn-toggle__label">
          {hasLabel && this.renderLabel()}
        </div>
      </div>
    )
  }

  renderLabel() {
    return <Text>{this.props.label}</Text>
  }

  handleClick() {
    this.props.onChange()
  }

  getButtonClasses() {
    const baseClass = 'sn-toggle__button'
    const activeClass = this.props.value ? 'is-active' : ''

    return `${baseClass} ${activeClass}`
  }
}

export default Toggle
