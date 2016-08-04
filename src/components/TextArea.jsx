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

  getTextAreaProps() {
    const { id, name, required, tabIndex, rows } = this.props

    return {
      id,
      name,
      required,
      tabIndex,
      rows
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