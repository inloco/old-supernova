import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavSeparator extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
  }

  static defaultProps = {
    className: '',
    label: null
  }

  render() {
    const { className, label } = this.props

    const componentClass = classNames(className, {
      'sn-drawer__label': label
    })

    if (!label) return <hr className={componentClass} />

    return <div className={componentClass}>{label}</div>
  }
}

export default NavSeparator