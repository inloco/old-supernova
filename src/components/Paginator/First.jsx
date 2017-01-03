import React from "react"
import Icon from "./../Icon"

class First extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className="sn-paginator__item"
      >
        <Icon code="first_page" />
      </span>
    )
  }
}

export default First