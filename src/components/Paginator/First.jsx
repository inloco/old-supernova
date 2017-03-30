import React from "react"
import Icon from "./../Icons"

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