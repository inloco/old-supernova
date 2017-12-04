import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'

class Action extends React.PureComponent {
  static propsTypes = {
    text: PropTypes.string,
    actionText: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    return (
      <div onClick={this.props.onClick} className={this.getClasses()}>
        {this.renderText()}
        {this.renderActionText()}
      </div>
    )
  }

  getClasses() {
    const baseClass = "sn-layout__drawer-action"
    const customClass = this.props.className

    if (!customClass) return baseClass
    return `${baseClass} ${customClass}`
  }

  renderText() {
    const text = this.props.text

    if (!text) return null

    return (
      <Text className="sn-layout__drawer-action__text" type="label">
        {this.props.text}
      </Text>
    )
  }

  renderActionText() {
    const actionText = this.props.actionText

    if (!actionText) return null

    return (
      <Text className="sn-layout__drawer-action__action-text">
        {this.props.actionText}
      </Text>
    )
  }
}

export default Action
