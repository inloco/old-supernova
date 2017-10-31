import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

function toArray(activeKey) {
  let currentActiveKey = activeKey
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : []
  }
  return currentActiveKey
}

class Collapsible extends Component {
  static propTypes = {
    accordion: PropTypes.bool,
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    onChange: PropTypes.func,
    className: PropTypes.string,
    borderless: PropTypes.bool,
    collapseTrigger: PropTypes.oneOf(['header', 'icon'])
  }

  static defaultProps = {
    accordion: false,
    className: '',
    onChange() {},
    defaultActiveKey: '0',
    borderless: false,
    collapseTrigger: null
  }

  constructor(props) {
    super(props)

    const { activeKey, defaultActiveKey } = this.props
    let currentActiveKey = defaultActiveKey
    if ('activeKey' in this.props) {
      currentActiveKey = activeKey
    }

    this.state = {
      activeKey: toArray(currentActiveKey)
    }

    this.onItemClick = this.onItemClick.bind(this)
  }

  render() {
    const className = `sn-collapsible ${this.props.className}`.trim()

    return (
      <div className={className}>
        {this.getChildren()}
      </div>
    )
  }

  setActiveKey(activeKey) {
    const activeKeyIsNotLocked = !('activeKey' in this.props)

    if (activeKeyIsNotLocked) {
      this.setState({ activeKey })
    }

    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey)
  }

  getActiveKey(key) {
    let { activeKey } = this.state

    if (this.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key]
    } else {
      activeKey = [...activeKey]
      const index = activeKey.indexOf(key)
      const isActive = index > -1

      if (isActive) {
        activeKey.splice(index, 1)
      } else {
        activeKey.push(key)
      }
    }

    return activeKey
  }

  onItemClick(key) {
    const activeKey = this.getActiveKey(key)

    this.setActiveKey(activeKey)
  }

  getChildren() {
    const { activeKey } = this.state
    const { accordion, borderless } = this.props
    const children = []

    Children.forEach(this.props.children, (child, index) => {
      if (!child) return

      const key = child.key || String(index)
      const isActive = accordion
                     ? activeKey[0] === key
                     : activeKey.indexOf(key) > -1
      const collapseTrigger = this.props.collapseTrigger || child.props.collapseTrigger

      const childProps = {
        key,
        isActive,
        borderless,
        collapseTrigger,
        onItemClick: child.props.disabled ? null : () => this.onItemClick(key),
        children: child.props.children
      }

      children.push(React.cloneElement(child, childProps))
    })

    return children
  }
}

Collapsible.Item = Item

export default Collapsible