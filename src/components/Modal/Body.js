import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Body extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  getClassName() {
    return classNames('sn-modal__body', this.props.className)
  }
  render() {
    return(
      <div className={this.getClassName()}>{this.props.children}</div>
    )
  }
}

export default Body