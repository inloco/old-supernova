import React, { PropTypes } from "react"

class Input extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired
  }

  render() {
    const { id, type, placeholder, name, isRequired } = this.props
    const ops = { required: isRequired }

    return (
      <div className="form-control-wrapper">
        <input id={ id }
               className="form-control"
               type={ type }
               placeholder={ placeholder }
               name={ name }
               { ...ops } />
        <span className="material-input"></span>
      </div>
    )
  }
}

export default Input
