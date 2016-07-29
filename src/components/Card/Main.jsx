import React, { PropTypes } from "react"

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className="sn-card sn-card--padding sn-card--col-gutter">
        {this.props.children}
      </div>
    )
  }
}

export default Card