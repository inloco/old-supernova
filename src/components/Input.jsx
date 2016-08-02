import React, { PropTypes } from "react"

class Input extends React.Component {
  static propTypes = {
    label:        PropTypes.string.isRequired,
    required:     PropTypes.bool,
    autoFocus:    PropTypes.bool,
    id:           PropTypes.string,
    name:         PropTypes.string,
    defaultValue: PropTypes.string,
    type:         PropTypes.string
  }

  static defaultProps = {
    required:     false,
    id:           null,
    name:         null,
    defaultValue: undefined,
    type:         "text"
  }

  render() {
    const { id, required, label, defaultValue, type, name, autoFocus } = this.props

    return(
      <div className="sn-input">
        <input {...{ id, required, defaultValue, type, name, autoFocus }}/>
        <label htmlFor={ id } className="sn-field__label">
          { label }
        </label>
        <i className="sn-field__bar"></i>
      </div>
    )
  }
}

export default Input