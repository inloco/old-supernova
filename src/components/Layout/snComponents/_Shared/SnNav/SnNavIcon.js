import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../../../../Icons'

class SnNavIcon extends React.Component {
  static propTypes = {
    code: PropTypes.string,
    src: PropTypes.string,
    atl: PropTypes.string,
  }

  static defaultProps = {
    code: 'menu',
    src: null,
    atl: null
  }

  render() {
    const { code, src, atl } = this.props

    return (
      <div className='sn-nav__list__item__icon'>
        {
          src
          ? <img src={ src } atl={ atl } />
          : <Icon code={ code } />
        }
      </div>
    )
  }
}

export default SnNavIcon