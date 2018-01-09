import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class BasicLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    openDrawer: PropTypes.bool
  }

  static defaultProps = {
    classNames: '',
    openDrawer: false
  }

  render() {
    const layoutClass = classNames('sn-layout', this.props.className, {
      'sn-layout--open-drawer': this.props.openDrawer,
    })

    return (
      <div className="sn-structure">
        <div className={layoutClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default BasicLayout