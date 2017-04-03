import React, { PropTypes } from 'react'

class Step extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    status: PropTypes.string
  }

  getStatusClassName() {
    const { status } = this.props

    return status ? `is-${status}` : ''
  }
}

export default Step