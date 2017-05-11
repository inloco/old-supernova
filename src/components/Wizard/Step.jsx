import React from 'react'
import PropTypes from 'prop-types'

class Step extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-wizard-step">
        {this.props.children}
      </div>
    )
  }
}

export default Step
