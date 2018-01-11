import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Sysbar extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    theme: PropTypes.oneOf(['dark', 'light'])
  }

  static defaultProps = {
    theme: null
  }

  render() {
    const { theme } = this.props
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