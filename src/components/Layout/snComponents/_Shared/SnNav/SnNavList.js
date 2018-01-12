import React from 'react'
import PropTypes from 'prop-types'

const SN_NAV_LIST_ITEM = 'SnNavListItem'
const SN_NAV_LINK = 'SnNavLink'

class SnNavList extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    drawerIsCollapsed: PropTypes.bool,
    handleObfuscatorClick: PropTypes.func
  }

  render() {
    const SnNavList = () => (this.renderSnNavList())
    return (
      <ul className='sn-nav__list'>
        <SnNavList />
      </ul>
    )
  }

  renderSnNavList() {
    return React.Children.map(
      this.props.children,
      child => {
        if(child.type.name === SN_NAV_LIST_ITEM) {
          return this.cloneSnNavListItem(child)
        } else if(child.type.name === SN_NAV_LINK){
          return this.clonenNavLink(child)
        }

        return child
      }
    )
  }

  cloneSnNavListItem(child) {
    return React.cloneElement(
      child,
      { drawerIsCollapsed: this.props.drawerIsCollapsed }
    )
  }

  clonenNavLink(child) {
    console.log('passei by SnNavList', this.props.handleObfuscatorClick)
    return React.cloneElement(
      child,
      { handleObfuscatorClick: this.props.handleObfuscatorClick }
    )
  }
}

export default SnNavList