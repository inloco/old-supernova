import React, { PropTypes } from "react"

class ColGroup extends React.Component {
  render() {
    return (
      <div className="sn-card__col--group">
        {this.props.children}
      </div>
    )
  }
}

export default ColGroup