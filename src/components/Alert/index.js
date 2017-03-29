import React, { PropTypes } from "react"
import ReactDOM from "react-dom"

class Alert extends React.Component {
  constructor(props){
    super(props)

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }
  static propTypes = {
    message:    PropTypes.string.isRequired,
    type:       PropTypes.string,
    active:     PropTypes.bool,
    closeAfter: PropTypes.number,
    icon:       PropTypes.string
  }

  static defaultProps = {
    type: "success",
    icon: "check",
    active: false
  }

  componentDidMount() {
    this.closeAfter(this.props.closeAfter)
  }

  handleCloseClick() {
    this.props.onClose()
  }

  closeAfter(time) {
    if(time) {
      setTimeout(this.props.onClose, time)
    }
  }

  getTypeClassName() {
    return `sn-alert--${this.props.type}`
  }

  getClassName() {
    return `sn-alert sn-alert--active ${this.getTypeClassName()}`
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

  render() {
    return (
      <div className={this.getClassName()}>
        {this.getIcon()}

        <button
          type="button"
          className="sn-alert--close"
          onClick={this.handleCloseClick}
        >
          <i className="material-icons">&#xE14C;</i>
        </button>

        <div className="sn-alert--message">{this.props.message}</div>
      </div>
    )
  }
}

export default Alert
