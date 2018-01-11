import React from 'react'
import PropTypes from 'prop-types'

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className='sn-layout__main__content'>
        { this.props.children }
      </div>
    )
  }
}

export default Content