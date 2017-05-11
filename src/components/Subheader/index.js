import React from 'react'
import PropTypes from 'prop-types'

class Subheader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-layout__subheader">
        {this.props.children}
      </div>
    )
  }
}

export default Subheader
