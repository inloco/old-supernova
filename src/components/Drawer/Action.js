import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'

class Action extends React.PureComponent {
  static propsTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="sn-layout__drawer-action">
        <Text type="label" align="center">{this.props.text}</Text>
      </div>
    )
  }
} 

export default Action
