import React from 'react'
import PropTypes from 'prop-types'

class SnNavText extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  render() {
    return (
      <li className='sn-nav__list__item__text'>
        { this.props.value }
      </li>
    )
  }
}

export default SnNavText
