import React, { PropTypes } from "react"

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

    if(closeAfter !== undefined) {
      setTimeout(() => {
        this.close()
      }, closeAfter)
    }
  }

  hideOnTop() {
    const node  = ReactDOM.findDOMNode(this)

    node.style.top = `-${node.clientHeight}px`
  }

  fixTopPosition() {
    if(!this.state.active) {
      this.hideOnTop()
    }
  }

  close() {
    this.setState({ active: false })
  }

  componentDidMount() {
    this.fixTopPosition()
    this.handleCloseAfter()
  }

  componentDidUpdate() {
    this.fixTopPosition()
    this.handleCloseAfter()
  }

  render() {
    return (
      <div className={this.getClassName()} role="alert">
        {this.getIcon()}
        <button type="button" className="sn-alert--close" onClick={this.handleCloseClick.bind(this)}>
          <i className="material-icons">&#xE14C;</i>
        </button>
        <div className="sn-alert--message">{this.props.message}</div>
      </div>
    )
  }
}

export default Alert
