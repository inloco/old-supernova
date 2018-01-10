import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DrawerLayout extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    obfuscatorClick: PropTypes.func
  }

  static defaultProps = {
    collapsed: false,
    obfuscatorClick: () => {}
  }

  render() {
    const drawerClasses = classNames('sn-layout__drawer', {
      'sn-layout__drawer--collapsed': this.props.collapsed
    })

    return (
      <Fragment>
        <div className={drawerClasses}>
          { this.props.children }
        </div>
        <div
          className='sn-layout__obfuscator'
          onClick={ this.props.obfuscatorClick }
        />
      </Fragment>
    )
  }
}

export default DrawerLayout