import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    return (
      <i 
      onClick={this.props.onClick}
      className={`material-icons 
                  ${this.props.className}`
                }
      >
        {this.props.code}
      </i>
    )
  }
}

export default Icon
