import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Footer extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  getClassName() {
    return classNames('sn-modal__footer', this.props.className)
  }

  render() {
    return(
      <div className={this.getClassName()}>{this.props.children}</div>
    )
  }
}

export default Footer