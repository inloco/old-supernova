import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SysbarLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(['dark', 'light'])
  }

  static defaultProps = {
    className: '',
    theme: null
  }
  render() {
    const componentClass = classNames('sn-layout__sysbar', this.props.className, {
      [`sn-layout__sysbar--${this.props.theme}-theme`]: this.props.theme
    })

    return (
      <div className={componentClass}>
        {this.props.children}
      </div>
    )
  }
}

export default SysbarLayout