import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class FooterLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-layout__main__footer', this.props.className)

    return (
      <footer className={className}>
        {this.props.children}
      </footer>
    )
  }
}

export default FooterLayout