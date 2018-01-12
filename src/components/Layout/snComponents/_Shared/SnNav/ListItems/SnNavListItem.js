import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SnNavListItem extends React.Component {
  static propTypes = {
    expandable: PropTypes.bool,
    children: PropTypes.any
  }

  static defaultProps = {
    expandable: false
  }

  constructor(props) {
    super(props)

    this.state = ({ expanded: false })
  }

  render() {
    const drawerIsCollapsed = this.drawerIsCollapsed()
    const isExpanded = !drawerIsCollapsed && this.state.expanded
    const navlistItemClasses = classNames('sn-nav__list__item',{
      'sn-nav__list__item--expandable': this.props.expandable,
      'is-expanded': isExpanded
    })

    return (
      <li className={  navlistItemClasses } onClick={ this.handleExpansion }>
        { this.props.children }
      </li>
    )
  }

  handleExpansion = (event) => {
    event.stopPropagation()

    if (!this.props.expandable) return

    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  drawerIsCollapsed() {
    let drawerIsCollapsed = this.context.drawerIsCollapsed

    if(this.context.drawerIsOpened) {
      drawerIsCollapsed = false
    }

    return drawerIsCollapsed
  }
}

SnNavListItem.contextTypes = {
  drawerIsCollapsed: PropTypes.bool,
  drawerIsOpened: PropTypes.bool
}

export default SnNavListItem