import React, { PropTypes } from "react"

class Icon extends React.Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  render() {
    return (
      <i className="material-icons">
        {this.props.code}
      </i>
    )
  }
}

export default Icon
