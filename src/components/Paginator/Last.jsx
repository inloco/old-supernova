import React from "react"
import Icon from "./../Icon"

class Last extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className="sn-paginator__item"
      >
        <Icon code="last_page" />
      </span>
    )
  }
}

export default Last