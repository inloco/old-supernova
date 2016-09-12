import React, { PropTypes } from "react"
import Label from "./Label"

class TextArea extends React.Component {
  static propTypes = {
    id:              PropTypes.string,
    name:            PropTypes.string,
    rows:            PropTypes.number,
    tabIndex:        PropTypes.number,
    required:        PropTypes.bool,
    label:           PropTypes.string,
    defaultValue:    PropTypes.string
  }

  static defaultProps = {
    tabIndex:        0,
    defaultRequired: false
  }

  constructor(props) {
    super(props)

    this.state = {
      hasValue: props.defaultValue !== "" && props.defaultValue !== undefined,
      value: props.defaultValue
    }
  }

  handleBlur(event) {
    const textArea    = event.target
    const hasValue = textArea.value !== ""

    if(hasValue !== this.state.hasValue) {
      this.setState({ hasValue })
    }
  }

  handleChange(event) {
    event.persist()

    this.setState({
      value: event.target.value
    },
    () => {
      if(this.props.onChange) {
        this.props.onChange(event)
      }
    })
  }

  getTextAreaClassName() {
    return this.state.hasValue ? "has-value" : ""
  }

  getTextAreaProps() {
    const { id, name, required, tabIndex, rows, defaultValue, value } = this.props

    return {
      id,
      name,
      required,
      tabIndex,
      rows,
      defaultValue,
      value,
      onChange:  this.handleChange.bind(this),
      onBlur:    this.handleBlur.bind(this),
      className: this.getTextAreaClassName()
    }
  }

  render() {
    const { id, label } = this.props

    return (
      <div className={`sn-input ${this.props.error ? 'has-error' : ''}`}>
        <textarea {...this.getTextAreaProps()}/>
        <Label value={label} htmlFor={id} />
        <i className="sn-field__bar"></i>

        <span className="sn-form-group__message">
          {this.props.error}
        </span>
      </div>
    )
  }
}

export default TextArea