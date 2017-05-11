import React from 'react'
import PropTypes from 'prop-types'

class Head extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <thead>
        { children }
      </thead>
    )
  }
}

export default Head
