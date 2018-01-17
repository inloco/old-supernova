import React from 'react'
import PropTypes from 'prop-types'

class SnNavLabel extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: ''
  }

  render() {
    return (
      <li className='sn-nav__list__label'>
        { this.props.children }
      </li>
    )
  }
}

export default SnNavLabel
