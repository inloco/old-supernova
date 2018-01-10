import React from 'react'
import PropTypes from 'prop-types'

class SnNavSection extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }

  static defaultProps = {
    value: null
  }

  render() {
    const { value } = this.props

    if(!value) return <hr />

    return (
      <div class='sn-drawer__label'>
        { value }
      </div>
    )
  }
}

export default SnNavSection