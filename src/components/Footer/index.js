import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-layout__footer">
        {this.props.children}
      </div>
    )
  }
}

export default Footer