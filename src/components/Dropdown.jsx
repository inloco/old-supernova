import React, { PropTypes } from "react"
import Label from "./Label"

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      value: props.value,
      values: props.values
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
    if(this.props.multiple && this.state.values !== nextState.values) {
      this.props.onChange(nextState.values)
      return
    }

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

  getOptionByValue(value) {
    return this.props.options.find(option => option.value === value)
  }

  handleOptionClick(option) {
    if(this.props.multiple) {
      this.setState({
        values: this.state.values.concat(option.value)
      })
    } else {
      this.setState({ value: option.value })
    }

    this.toggleList()
  }

  handleRemoveOptionClick(option) {
    this.setState({
      ...this.state,
      values: this.state.values.filter(value => value !== option.value)
    })
  }

  avaiableOptions() {
    if(this.props.multiple) {
      return this.props.options.filter(option =>
        !this.state.values.find(value => value === option.value)
      )
    }

    return this.props.options
  }

  renderOptions(options) {
    const listStyle = {
      display: this.state.open ? "block" : "none"
    }

    return (
      <ul className="sn-dropdown__results" style={listStyle}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={this.handleOptionClick.bind(this, option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    )
  }

  renderError() {
    return this.props.error ? <span className="sn-dropdown__message">{this.props.error}</span> : ""
  }

  renderLabel() {
    const option = this.getOptionByValue(this.state.value)

    return option ? option.name : ''
  }

  renderSelectedValues() {
    const hasValues = this.state.values.length

    if(!hasValues) return undefined

    return (
      <div className="sn-search-box">
        <ul className="sn-search-box__selected">
          {this.state.values.map(selectedValue => {
            const option = this.getOptionByValue(selectedValue)

            return (
              <li key={option.value}>
                <div className="sn-search-box__item-content">{option.name}</div>
                <button onClick={this.handleRemoveOptionClick.bind(this, option)} type="button" className="sn-search-box__item-button"></button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  renderDropdownButton(options) {
    const statusStyle = this.props.layout === "status"
                          ? { borderLeftColor: this.props.statusColor }
                          : {}

    return (
      <div>
        <button
          className="sn-dropdown__button"
          onClick={() => this.toggleList()}
          type="button"
          style={statusStyle}
        >
          {this.props.multiple ? this.props.placeholder : this.renderLabel()}
        </button>

        {this.renderOptions(options)}
        {this.renderError()}
      </div>
    )
  }

  render() {
    const { label, multiple } = this.props
    const options = this.avaiableOptions()
    const hasOptions = options.length > 0

    return (
      <div className={this.getClassName()}>
        {label && <Label value={label} fixed={true}/>}
        {multiple && this.renderSelectedValues()}

        {hasOptions && this.renderDropdownButton(options)}
      </div>
    )
  }
}

Dropdown.defaultProps = {
  options: [],
  callOnChangeWhenMount: false,
  onChange: () => {},
  values: []
}

export default Dropdown
