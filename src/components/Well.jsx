import React from 'react'
import PropTypes from 'prop-types'

class Well extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return(
      <div className="sn-well">
        {this.props.children}
      </div>
    )
  }
}

export default Well
