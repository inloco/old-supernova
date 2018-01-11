import React from 'react'
import PropTypes from 'prop-types'

class SubHeader extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className='sn-layout__main__subheader'>
        { this.props.children }
      </div>
    )
  }
}

export default SubHeader