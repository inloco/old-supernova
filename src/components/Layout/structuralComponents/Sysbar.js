import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Sysbar extends React.Component {
  static propTypes = {
    hasDrawer: PropTypes.bool.isRequired,
    children: PropTypes.any
  }


  render() {
    const theme = this.props.hasDrawer ? 'light' : 'dark'
    const sysbarClasses = classNames('sn-layout__sysbar', {
      [`sn-layout__sysbar--${theme}-theme`]: theme
    })

    return (
      <div className={sysbarClasses}>
        { this.props.children }
      </div>
    )
  }
}

export default Sysbar