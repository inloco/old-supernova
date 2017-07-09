import React from 'react'
import PropTypes from 'prop-types'
import Label from './../Label'

class TextArea extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    limit: PropTypes.number,
    error: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  render() {
    const { id, label, fixed, error, limit } = this.props

    return (
      <div className={this.getWrapperClassName()}>
        <textarea {...this.getTextAreaProps()} />

        <Label value={label} htmlFor={id} fixed={fixed} />

        <i className='sn-field__bar' />

        {limit && !error && this.renderCounter()}
        {error && this.renderError()}
      </div>
    )
  }

  handleChange(event) {
    event.persist()

    const { onChange, limit } = this.props
    const value = event.target.value
    const haveLimitSize = limit ? value.length <= limit : true

    if(!haveLimitSize) return undefined

    this.setState({ value }, () => onChange && onChange(event))
  }

  getTextAreaClassName() {
    return this.state.value ? 'has-value' : ''
  }

  getTextAreaProps() {
    const { value, error, fixed, label, limit, ...validProps } = this.props

    return {
      ...validProps,
      onChange: this.handleChange.bind(this),
      className: this.getTextAreaClassName(),
      value: this.state.value
    }
  }

  getWrapperClassName() {
    return `
      sn-input
      ${this.props.error ? 'has-error' : ''}
    `
  }

  renderCounter() {
    const { limit } = this.props
    const currentLength = this.state.value.length

    return (
      <span className='sn-field__counter sn-color--primary'>
        {`${currentLength}\/${limit}`}
      </span>
    )
  }

  renderError() {
    const { error } = this.props

    return (
      <span className='sn-form-group__message'>
        {error}
      </span>
    )
  }
}

export default TextArea
