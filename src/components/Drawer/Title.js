import React from 'react'
import PropTypes from 'prop-types'

class Title extends React.PureComponent {
  static propsTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className="sn-layout__drawer-title">
        {this.props.children}
      </div>
    )
  }
}

export default Title