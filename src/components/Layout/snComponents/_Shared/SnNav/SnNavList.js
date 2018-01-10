import React from 'react'
import PropTypes from 'prop-types'

class SnNavList extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <ul className='sn-nav__list'>
        { this.props.children }
      </ul>
    )
  }
}

export default SnNavList