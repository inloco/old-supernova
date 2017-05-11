import React from 'react'
import PropTypes from 'prop-types'

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