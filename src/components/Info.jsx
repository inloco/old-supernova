import React, { PropTypes } from "react"

class Info extends React.Component {
  static propTyes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
  }

  static defaultProps = {
    icon: "icon-info"
  }

  render() {
    return (
      <span className="helper-bottom-left" title={ this.props.text }>
         <span className={ `icon-16 ${this.props.icon}` }></span>
      </span>
    )
  }
}

export default Info
