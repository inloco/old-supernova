import React from 'react'
import PropTypes from 'prop-types'

class Toggle extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className={this.getClasses()} onClick={this.handleClick}>
        <div className="sn-toggle__bar"></div>
        <div className="sn-toggle__circle"></div>
      </div>
    )
  }

  handleClick() {
    this.props.onChange()
  }

  getClasses() {
    const baseClass = 'sn-toggle'
    const activeClass = this.props.value ? 'is-active' : ''

    return `${baseClass} ${activeClass}`
  }
}

export default Toggle
