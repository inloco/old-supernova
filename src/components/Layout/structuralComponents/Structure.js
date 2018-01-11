import React from 'react'
import PropTypes from 'prop-types'

class Structure extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className='sn-structure'>
        { this.props.children }
      </div>
    )
  }
}

export default Structure