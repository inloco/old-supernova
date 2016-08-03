import React, { PropTypes } from "react"

class TextArea extends React.Component {
  static propTypes = {
    id:              PropTypes.string,
    name:            PropTypes.string,
    rows:            PropTypes.string,
    tabIndex:        PropTypes.string,
    required:        PropTypes.bool,
    label:           PropTypes.string
  }

  static defaultProps = {
    tabIndex:        "-1",
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

        <label htmlFor={id} className="sn-field__label">
          {label}
        </label>

        <i className="sn-field__bar"></i>

        <span className="sn-form-group__message">
          Error message
        </span>
      </div>
    )
  }
}

export default TextArea