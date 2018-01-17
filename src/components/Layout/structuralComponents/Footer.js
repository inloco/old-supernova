import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <footer className='sn-layout__main__footer'>
        { this.props.children }
      </footer>
    )
  }
}

export default Footer