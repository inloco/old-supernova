import React, { PropTypes } from "react"

class Input extends React.Component {
  constructor(props) {
    super()
    this.state = { value: props.value }
  }

  static propTyes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    value: PropTypes.string,
    dataRemoteInput: PropTypes.bool
  }

  static defaultProps = {
    value: ""
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { id,
            type,
            placeholder,
            name,
            dataRemoteInput,
            isRequired } = this.props
    const ops = { required: isRequired }

    return (
      <input id={ id }
             className={ type !== "hidden" ? form-control : "" }
             type={ type }
             placeholder={ placeholder }
             name={ name }
             data-remote-input={ dataRemoteInput !== undefined ? dataRemoteInput : null }
             value={ this.state.value }
             onChange={ (e) => { this.handleChange(e) } }
             { ...ops } />
    )
  }
}

export default Input
