import React, { PropTypes } from "react"

class List extends React.Component {
  render() {
    return (
      <div className="sn-card__list sn-card__list--strip">
        {this.props.children}
      </div>
    )
  }
}

export default List