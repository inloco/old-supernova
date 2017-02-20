import React from "react"
import Icon from "./../Icon"

class Number extends React.Component {
  render() {
    const { number, ...paginatorItemProps } = this.props

    return (
      <span className="sn-paginator__item" {...paginatorItemProps}>
        {number}
      </span>
    )
  }
}

export default Number