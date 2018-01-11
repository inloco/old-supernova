import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Drawer extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    collapsed: PropTypes.bool,
    obfuscatorClick: PropTypes.func
  }

  static defaultProps = {
    collapsed: true,
    obfuscatorClick: () => {}
  }

  render() {
    const drawerClasses = classNames('sn-layout__drawer', {
      'sn-layout__drawer--collapsed': this.props.collapsed
    })

    return (
      <React.Fragment>
        <div className={drawerClasses}>
          { this.props.children }
        </div>
        <div
          className='sn-layout__obfuscator'
          onClick={ this.props.obfuscatorClick }
        />
      </React.Fragment>
    )
  }
}

export default Drawer