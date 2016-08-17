import React, { PropTypes } from "react"

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)

    this.state = { open: false }
  }

  handleOnClick() {
    this.setState({ open: !this.state.open })
  }

  getLayoutClassName() {
    const { layout } = this.props

    return layout ? `sn-dropdown--${layout}` : ""
  }

  getClassName() {
    return `sn-dropdown ${this.getLayoutClassName()}`
  }

  renderChildren() {
    const { children } = this.props

    if(!Array.isArray(children)) {
      return this.renderItem(children, 0)
    }

    return children.map((child, index) => {
      return this.renderItem(child, index)
    })
  }

  renderItem(child, index) {
    return(
      <li key={index} onClick={this.handleOnClick}>
        {child}
      </li>
    )
  }

  render() {
    const listStyle = {
      display: this.state.open ? "block" : "none"
    }

    return (
      <div className={this.getClassName()}>
        <button
          className="sn-dropdown__button"
          onClick={this.handleOnClick}
          type="button"
        >
          {this.props.label}
        </button>

        <ul className="sn-dropdown__results" style={listStyle}>
          {this.renderChildren()}
        </ul>
      </div>
    )
  }
}

export default Dropdown