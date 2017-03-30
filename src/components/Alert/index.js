import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Icon from './../Icons'

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

  render() {
    const { active } = this.props

    if(active) {
      return (
        <div className={this.getClassName()}>
          {this.getIcon()}

          <button
            type="button"
            className="sn-alert--close"
            onClick={this.handleCloseClick}
          >
            <Icon code="&#xE14C;"/>
          </button>

          <div className="sn-alert--message">{this.props.message}</div>
        </div>
      )
    } else {
      return (<div className="sn-alert-hidden"></div>)
    }
  }

  componentWillReceiveProps(nextProps){
    const { active } = nextProps
    const { closeAfter } = nextProps

    if(active && closeAfter){
      this.closeAfter(closeAfter)
    }
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
}

export default Alert
