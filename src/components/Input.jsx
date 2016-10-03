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
    required:       false,
    type:           "text"
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
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
