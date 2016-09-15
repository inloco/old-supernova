import React, { PropTypes } from "react"
import Label from "./Label"

class TextArea extends React.Component {
  static propTypes = {
    id:              PropTypes.string,
    name:            PropTypes.string,
    rows:            PropTypes.number,
    tabIndex:        PropTypes.number,
    required:        PropTypes.bool,
    label:           PropTypes.string
  }

  static defaultProps = {
    tabIndex:        0
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value || ""
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  handleChange(event) {
    event.persist()

    this.setState({
      value: event.target.value
    }, () => {
      if(typeof this.props.onChange === "function") {
        this.props.onChange(event)
      }
    })
  }

  getTextAreaClassName() {
    return this.state.value === "" ? "" : "has-value"
  }

  getTextAreaProps() {
    const { value, error, fixed, label, ...validProps } = this.props

    return {
      ...validProps,
      onChange: this.handleChange.bind(this),
      className: this.getTextAreaClassName(),
      value: this.state.value
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