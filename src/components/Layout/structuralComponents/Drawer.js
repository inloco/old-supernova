import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Drawer extends React.Component {
  static propTypes = {
    handleCloseDrawerClick: PropTypes.func.isRequired,
    children: PropTypes.any,
    isCollapsed: PropTypes.bool
  }

  static defaultProps = {
    isCollapsed: true
  }

  render() {
    const drawerClasses = classNames('sn-layout__drawer', {
      'sn-layout__drawer--collapsed': this.props.isCollapsed
    })

    return (
      <React.Fragment>
        <div className={drawerClasses}>
          { this.props.children }
        </div>
        <div
          className='sn-layout__obfuscator'
          onClick={ this.props.handleCloseDrawerClick }
        />
      </React.Fragment>
    )
  }
}

export default Drawer