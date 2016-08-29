import React, { PropTypes } from "react"

class Input extends React.Component {
  constructor(props) {
    super()

    this.state = { value: props.value }
  }

  static propTyes = {
    type:            PropTypes.string.isRequired,
    required:        PropTypes.bool,
    id:              PropTypes.string,
    placeholder:     PropTypes.string,
    name:            PropTypes.string,
    value:           PropTypes.string,
    dataRemoteInput: PropTypes.bool,
    className:       PropTypes.string,
    defaultChecked:  PropTypes.bool,
    onClick:         PropTypes.func,
    onKeyPress:      PropTypes.func
  }

  static defaultProps = {
    value:          "",
    defaultChecked: false,
    required:       false
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  getClassName() {
    return this.props.className || "form-control bs-material"
  }

  getProps() {
    const {
      id,
      type,
      placeholder,
      name,
      dataRemoteInput,
      defaultChecked,
      required
    } = this.props

    return {
      id,
      type,
      placeholder,
      name,
      defaultChecked,
      required,
      value:               this.state.value,
      "data-remote-input": dataRemoteInput,
      className:           this.getClassName(),
      onChange:            this.handleChange.bind(this)
    }
  }

  render() {
    return <input {...this.getProps()}
                  onClick={this.props.onClick}
                  onKeyPress={this.props.onKeyPress} />
  }
}

export default Input
