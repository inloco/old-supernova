import React from 'react'
import PropTypes from 'prop-types'

class Aside extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <aside className='sn-layout__aside'>
        { this.props.children }
      </aside>
    )
  }
}

export default Aside