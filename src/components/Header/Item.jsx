import React, { PropTypes } from "react"

class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }

  render() {
    const { label, href } = this.props

    return (
      <span>
         <a href={ href }>{ label }</a>
         <span className="icon icon-arrow-right"></span>
      </span>
    )
  }
}

export default Item
