import React, { PropTypes } from "react"
import ReactDOM from "react-dom"

class Alert extends React.Component {
  static propTyes = {
    message:    PropTypes.string.isRequired,
    type:       PropTypes.string,
    active:     PropTypes.bool,
    closeAfter: PropTypes.number,
    icon:       PropTypes.string
  }

  static defaultProps = {
    type:   "success",
    active: false
  }

  constructor(props) {
    super(props)

    this.state = { active: props.active }
  }

  getTypeClassName() {
    return `sn-alert--${this.props.type}`
  }

  getActiveClassName() {
    return this.state.active ? "sn-alert--active" : ""
  }

  getClassName() {
    return `sn-alert ${this.getTypeClassName()} ${this.getActiveClassName()}`
  }

  getIcon() {
    const { icon } = this.props

    if(icon !== undefined) {
      return(
        <div className="sn-alert--icon">
          <i className="material-icons">{this.props.icon}</i>
        </div>
      )
    }
  }

  getHeight() {
    ReactDOM.findDOMNode(this).clientHeight
  }

  handleCloseClick(e) {
    e.preventDefault()
    this.close()
  }

  handleCloseAfter() {
    const { closeAfter } = this.props

    if(closeAfter !== undefined && this.state.active) {
      setTimeout(() => { this.close() }, closeAfter)
    }
  }

  hideOnTop() {
    const node  = ReactDOM.findDOMNode(this)

    node.style.top = `-${node.clientHeight}px`
  }

  close() {
    this.setState({ active: false })
  }

  componentDidMount() {
    this.hideOnTop()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active })
  }

  componentDidUpdate() {
    this.handleCloseAfter()
  }

  render() {
    return (
      <div className={this.getClassName()} role="alert">
        {this.getIcon()}
        <button type="button" className="sn-alert--close" ref="btnClose" onClick={this.handleCloseClick.bind(this)}>
          <i className="material-icons">&#xE14C;</i>
        </button>
        <div className="sn-alert--message">{this.props.message}</div>
      </div>
    )
  }
}

export default Alert
