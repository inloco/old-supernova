import React from 'react'
import PropTypes from 'prop-types'

class SnNavInfo extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  render() {
    return (
      <li className='sn-nav__list__info'>
        { this.props.value }
      </li>
    )
  }
}

export default SnNavInfo
