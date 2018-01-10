import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <main className='sn-layout__main'>
        { this.props.children }
      </main>
    )
  }
}

export default Main