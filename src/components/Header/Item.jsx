import React, { PropTypes } from "react"

class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    noArrow: false
  }
  
  getArrow() {
    return <span className="icon icon-arrow-right"></span>
  }

  render() {
    const { label, href, noArrow } = this.props

    return (
      <span>
        <a href={ href }>{ label }</a>
        { noArrow ? null : this.getArrow() }
      </span>
    )
  }
}

export default Item
