import React from 'react'
import PropTypes from 'prop-types'

class SnHeaderTitleItem extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    href: '#',
    value: ''
  }

  render() {
    const { href, onClick, value } = this.props
    return (
      <li className='sn-header__title__item' onClick={onClick}>
        <a href={ href }>
          { value }
        </a>
      </li>
    )
  }
}

export default SnHeaderTitleItem