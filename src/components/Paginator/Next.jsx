import React from "react"
import Icon from "./../Icons"

class Next extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className="sn-paginator__item"
      >
        <Icon code="navigate_next" />
      </span>
    )
  }
}

export default Next