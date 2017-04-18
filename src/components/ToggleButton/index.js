import React from 'react'
import Button from './../Button'

class ToggleButton extends React.PureComponent {
  render() {
    return (
      <Button className={this.getClassName()} {...this.props} />
    )
  }

  getClassName() {
    return `
      sn-button--toggle
      ${this.props.active ? 'sn-button--toggle--active' : ''}
    `
  }
}

export default ToggleButton
