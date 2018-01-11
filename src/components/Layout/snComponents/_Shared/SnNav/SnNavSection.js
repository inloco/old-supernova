import React from 'react'
import PropTypes from 'prop-types'

class SnNavSection extends React.Component {
  static propTypes = {
    children: PropTypes.string
  }

  static defaultProps = {
    children: null
  }

  render() {
    const { children } = this.props

    if(!children) return <hr />

    return (
      <div className='sn-drawer__label'>
        { children }
      </div>
    )
  }
}

export default SnNavSection