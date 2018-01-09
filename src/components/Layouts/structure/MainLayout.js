import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MainLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-layout__main', this.props.className)

    return (
      <main className={className}>
        {this.props.children}
      </main>
    )
  }
}

export default MainLayout