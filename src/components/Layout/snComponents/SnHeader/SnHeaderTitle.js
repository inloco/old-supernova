import React from 'react'
import PropTypes from 'prop-types'

class SnHeaderTitle extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <ul className='sn-header__title'>
        { this.props.children }
      </ul>
    )
  }
}

export default SnHeaderTitle