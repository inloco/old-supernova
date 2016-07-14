import React, { PropTypes } from "react"

class Info extends React.Component {
  static propTyes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const{ text } = this.props

    return (
      <span className="helper-bottom-left" title={ text }>
         <span className="icon-16 icon-info"></span>
      </span>
    )
  }
}

export default Info
