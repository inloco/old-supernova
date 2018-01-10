import React from 'react'
import PropTypes from 'prop-types'

class SnNavLabel extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  render() {
    return (
      <li className='sn-nav__list__label'>
        { this.props.value }
      </li>
    )
  }
}

export default SnNavLabel
