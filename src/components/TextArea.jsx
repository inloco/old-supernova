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
    tabIndex:        0,
    defaultRequired: false
  }

  constructor(props) {
    super(props)

    this.state = { hasValue: false }
  }

  handleBlur(event) {
    const textArea    = event.target
    const hasValue = textArea.value !== ""

    if(hasValue !== this.state.hasValue) {
      this.setState({ hasValue })
    }
  }

  getTextAreaClassName() {
    return this.state.hasValue ? "has-value" : ""
  }

  getTextAreaProps() {
    const { id, name, required, tabIndex, rows } = this.props

    return {
      id,
      name,
      required,
      tabIndex,
      rows,
      onBlur:    this.handleBlur.bind(this),
      className: this.getTextAreaClassName()
    }
  }

  render() {
    const { id, label } = this.props

    return (
      <div className="sn-input">
        <textarea {...this.getTextAreaProps()}></textarea>
        <Label value={label} htmlFor={id} />
        <i className="sn-field__bar"></i>

        <span className="sn-form-group__message">
          Error message
        </span>
      </div>
    )
  }
}

export default TextArea