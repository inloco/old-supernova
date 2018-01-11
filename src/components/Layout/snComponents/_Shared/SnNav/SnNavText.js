import React from 'react'
import PropTypes from 'prop-types'

class SnNavText extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: ''
  }

  render() {
    return (
      <div className='sn-nav__list__item__text'>
        { this.props.children }
      </div>
    )
  }
}

export default SnNavText
