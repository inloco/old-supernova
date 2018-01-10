import React from 'react'
import PropTypes from 'prop-types'

class SnHeaderTitleItem extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    url: '#',
    value: ''
  }

  render() {
    return (
      <li className='sn-header__title__item'>
        <a href={ this.props.href }>
          { this.props.value }
        </a>
      </li>
    )
  }
}

export default SnHeaderTitleItem