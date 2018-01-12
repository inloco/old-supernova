import React from 'react'
import PropTypes from 'prop-types'
import drawerIsCollapsed from './drawerIsCollapsed'

class SnNavSection extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: null
  }

  render() {
    const { children } = this.props
    const isCollapsed = drawerIsCollapsed(this.context)

    if(isCollapsed || !children) return <hr />

    return (
      <div className='sn-drawer__label'>
        { children }
      </div>
    )
  }
}

SnNavSection.contextTypes = {
  drawerIsCollapsed: PropTypes.bool,
  drawerIsOpened: PropTypes.bool
}

export default SnNavSection