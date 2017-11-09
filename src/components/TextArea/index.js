import React from 'react'
import PropTypes from 'prop-types'
import Label from './../Label'
import calculateNodeHeight from './calculateNodeHeight'

class TextArea extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    tabIndex: PropTypes.number,
    required: PropTypes.bool,
    label: PropTypes.string,
    limit: PropTypes.number,
    error: PropTypes.any,
    onChange: PropTypes.func,
    value: PropTypes.string,
    minRows: PropTypes.number,
    maxRows: PropTypes.number
  }

  static defaultProps = {
    tabIndex: 0,
    value: '',
    label: '',
    minRows: 2,
    maxRows: 4
  }

  constructor(props) {
    super(props)

    this.currentRequestAnimationFrame = null

    this.onResize = this.onResize.bind(this)

    this.state = {
      value: props.value,
      textareaStyles: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })

    this.resizeTextArea()
  }

  componentDidMount() {
    this.resizeTextArea()

    if(typeof window !== 'undefined' && !this.props.rows) {
      window.addEventListener('resize', this.onResize, false)
    }
  }

  componentWillUnmount () {
    if(typeof window !== 'undefined' && this.props.rows) {
      window.removeEventListener('resize', this.onResize)
    }
  }

  onResize (){
    if (this.currentRequestAnimationFrame) return

    if(typeof window !== 'undefined') {
      this.currentRequestAnimationFrame = window.requestAnimationFrame(() => {
        this.resizeTextArea()
        this.currentRequestAnimationFrame = null
      })
    }
  }

  render() {
    const { id, label, fixed, error, limit } = this.props

    return (
      <div className={this.getWrapperClassName()}>
        <textarea
          {...this.getTextAreaProps()}
          ref={textArea => this.textAreaRef = textArea}
        />

        <Label value={label} htmlFor={id} fixed={fixed} />

        <i className='sn-field__bar' />

        {limit && !error && this.renderCounter()}
        {error && this.renderError()}
      </div>
    )
  }

  resizeTextArea() {
    if (!this.textAreaRef || this.props.rows) {
      return
    }

    const { minRows, maxRows } = this.props

    const textareaStyles = calculateNodeHeight(this.textAreaRef, minRows, maxRows)
    this.setState({ textareaStyles })
  }

  handleChange(event) {
    event.persist()

    const { onChange, limit } = this.props
    const value = event.target.value
    const haveLimitSize = limit ? value.length <= limit : true

    if(!haveLimitSize) return undefined

    this.resizeTextArea()

    this.setState({ value }, () => onChange && onChange(event))
  }

  getTextAreaClassName() {
    return this.state.value ? 'has-value' : ''
  }

  getTextAreaProps() {
    const { value, error, fixed, label, limit, minRows, maxRows, ...validProps } = this.props

    const style = {
      ...this.props.style,
      ...this.state.textareaStyles,
    }

    return {
      ...validProps,
      style,
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
