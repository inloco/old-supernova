import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
  }

  render() {
    const { color } = this.props
    const style = {
      color: color
    }

    return (
      <i 
      onClick={this.props.onClick}
      className={`material-icons ${this.props.className}`}
      style={style}
      >
        {this.props.code}
      </i>
    )
  }
}

export default Icon
