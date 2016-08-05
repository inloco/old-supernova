import React, { PropTypes } from "react"

class Icon extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {
    return (
      <i className="material-icons">
        {this.props.content}
      </i>
    )
  }
}

export default Icon
