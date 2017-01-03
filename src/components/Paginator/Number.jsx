import React from "react"
import Icon from "./../Icon"

class Number extends React.Component {
  render() {
    return (
      <span className="sn-paginator__item">
        {this.props.number}
      </span>
    )
  }
}

export default Number