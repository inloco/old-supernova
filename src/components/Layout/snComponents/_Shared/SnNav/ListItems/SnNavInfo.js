import React from 'react'
import PropTypes from 'prop-types'

class SnNavInfo extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: ''
  }

  render() {
    return (
      <li className='sn-nav__list__info'>
        { this.props.children }
      </li>
    )
  }
}

export default SnNavInfo
