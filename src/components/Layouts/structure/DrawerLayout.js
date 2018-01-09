import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DrawerLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    obfuscatorClick: PropTypes.func
  }

  static defaultProps = {
    className: '',
    collapsed: false,
    obfuscatorClick: () => {}
  }

  render() {
    const componentClass = classNames('sn-layout__drawer', this.props.className, {
      'sn-layout__drawer--collapsed': this.props.collapsed
    })

    return (
      <Fragment>
        <div
          className="sn-layout__obfuscator"
          onClick={this.props.obfuscatorClick}
        >
        </div>

        <div className={componentClass}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default DrawerLayout