import React from "react"
import Icon from "./../Icon"

class Previous extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className="sn-paginator__item"
      >
        <Icon code="navigate_before" />
      </span>
    )
  }
}

export default Previous