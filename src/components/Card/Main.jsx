import React, { PropTypes } from "react"

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    cardColor: PropTypes.string
  }

  render() {
    const style = {
      borderLeftColor: this.props.cardColor,
      borderLeftWidth: "4px",
      borderLeftStyle: "solid"
    }
    const cardStyle = this.props.cardColor ? style : {}

    return (
      <div
        className="sn-card sn-card--padding sn-card--col-gutter"
        style={cardStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
