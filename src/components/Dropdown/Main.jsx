import React, { PropTypes } from "react"
import Label from "./../Label"

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      open: false,
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  changeLabelTo(newLabel) {
    this.setState({
      value: newLabel
    })
  }

  toggleList() {
    this.setState({ open: !this.state.open })
  }

  handleClick(event, child) {
    const newLabel = event.target.textContent

    this.toggleList()
    this.changeLabelTo(newLabel)

    if(child) {
      child.props.onClick()
    }
  }

  getLayoutClassName() {
    const { layout } = this.props

    return layout ? `sn-dropdown--${layout}` : ""
  }

  getErrorClassName() {
    const { error } = this.props

    return error ? "has-error" : ""
  }

  getClassName() {
    return `sn-dropdown ${this.getLayoutClassName()} ${this.getErrorClassName()}`
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
      <li key={index} onClick={(e) => { this.handleClick(e, child) }}>
        {child}
      </li>
    )
  }

  renderError() {
    return this.props.error ? <span className="sn-dropdown__message">{this.props.error}</span> : ""
  }

  render() {
    const listStyle = {
      display: this.state.open ? "block" : "none"
    }

    return (
      <div className={this.getClassName()}>
        {this.props.label ? <Label value={this.props.label} fixed={true}/> : ""}

        <button
          className="sn-dropdown__button"
          onClick={this.handleClick}
          type="button"
        >
          {this.state.value}
        </button>

        <ul className="sn-dropdown__results" style={listStyle}>
          {this.renderChildren()}
        </ul>

        {this.renderError()}
      </div>
    )
  }
}

export default Dropdown