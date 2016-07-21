import React, { PropTypes } from "react"

class Input extends React.Component {
  constructor(props) {
    super()
    this.state = { value: props.value }
  }

  static propTyes = {
    type: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    dataRemoteInput: PropTypes.bool,
    className: PropTypes.string,
    isChecked: PropTypes.bool
  }

  static defaultProps = {
    value: "",
    isChecked: false
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  getClasses() {
    const { className } = this.props

    return(
      className !== undefined ? className  : "form-control"
    )
  }

  render() {
    const { id,
            type,
            placeholder,
            name,
            dataRemoteInput,
            isRequired,
            isChecked } = this.props
    const requiredOps = { required: isRequired }
    const checkedOps = { checked: isChecked }

    return (
      <input id={ id !== undefined ? id : null }
             className={ type !== "hidden" ? this.getClasses() : "" }
             type={ type }
             placeholder={ placeholder !== undefined ? placeholder : null }
             name={ name !== undefined ? name : null }
             data-remote-input={ dataRemoteInput !== undefined ? dataRemoteInput : null }
             value={ this.state.value }
             onChange={ (e) => { this.handleChange(e) } }
             { ...requiredOps } />
    )
  }
}

export default Input
