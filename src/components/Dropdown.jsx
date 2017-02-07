import React, { PropTypes } from "react"
import Label from "./Label"

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      value: props.value
    }
  }

  static defaultProps = {
    statusColor: "silver"
  }

  componentDidMount() {
    if(this.props.callOnChangeWhenMount) {
      this.props.onChange(this.state.value)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.updateWhenValuePropChange && this.state.value !== nextProps.value) {
      this.setState({ value: nextProps.value })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.state.value !== nextState.value) {
      this.props.onChange(nextState.value)
    }
  }

  toggleList() {
    this.setState({ open: !this.state.open })
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

  handleOptionClick(option) {
    this.setState({ value: option.value })
    this.toggleList()
  }

  renderOptions() {
    const options = this.props.options || []

    return options.map((option, index) => (
      <li
        key={index}
        onClick={this.handleOptionClick.bind(this, option)}
      >
        {option.name}
      </li>
    ))
  }

  renderError() {
    return this.props.error ? <span className="sn-dropdown__message">{this.props.error}</span> : ""
  }

  renderLabel() {
    const option = this.props.options.find(option => option.value === this.state.value)

    return option ? option.name : ''
  }

  render() {
    const listStyle = {
      display: this.state.open ? "block" : "none"
    }

    const statusStyle = this.props.layout === "status" ? {borderLeftColor: this.props.statusColor} : {}

    return (
      <div className={this.getClassName()}>
        {this.props.label ? <Label value={this.props.label} fixed={true}/> : ""}

        <button
          className="sn-dropdown__button"
          onClick={() => this.toggleList()}
          type="button"
          style={statusStyle}
        >
          {this.renderLabel()}
        </button>

        <ul className="sn-dropdown__results" style={listStyle}>
          {this.renderOptions()}
        </ul>

        {this.renderError()}
      </div>
    )
  }
}

Dropdown.defaultProps = {
  options: [],
  callOnChangeWhenMount: false,
  onChange: () => {}
}

export default Dropdown
