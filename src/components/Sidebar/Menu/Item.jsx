import React from "react"
import PropTypes from "prop-types"
import { bindItems } from "../../../helpers/sidebar"

class Item extends React.Component {
  static propTyes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    active: false
  }

  getItemClass() {
    return (
      (this.hasChildren() ? "drop-menu " : "") + (this.props.active ? "active" : "")
    )
  }

  getIcon() {
    const { icon } = this.props

    return (
      icon != null ? <span className={ "icon-nav " + icon } ></span> : null
    )
  }

  getList() {
    const { children } = this.props

    return (
      this.hasChildren() ? <ul> { bindItems(children, this.props.sidebar) } </ul> : null
    )
  }

  hasChildren() {
    const { children } = this.props

    return children !== undefined
  }

  handleClick(e) {
    const { href } = this.props

    e.stopPropagation()
    this.props.handleClick(href)
  }

  render() {
    const { label, href } = this.props

    return (
      <li className={ this.getItemClass() } onClick={ (e) => { this.handleClick(e) } }>
        <a href= { href }>
          <span className="overlink"></span>
          { this.getIcon() }
          { label }
        </a>
        { this.getList() }
      </li>
    )
  }
}

export default Item
