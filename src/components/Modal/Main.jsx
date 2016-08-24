import React, { PropTypes } from "react"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = { open: this.props.open }
  }

  open() {
    document.querySelector("body").classList.add("sn-modal--open")

    this.setState({ open: true })
  }

  close() {
    document.querySelector("body").classList.remove("sn-modal--open")

    this.setState({ open: false })
  }

  getTypeClassName() {
    switch(this.props.modalType) {
      case "dialog":
        return "sn-modal--dialog"
      default:
        return ""
    }
  }

  getSizeClassName() {
    switch(this.props.size) {
      case "small":
        return "sn-modal--sm"
      case "large":
        return "sn-modal--lg"
      case "extra-large":
        return "sn-modal--xl"
      default:
        return ""
    }
  }

  getClassName() {
    return `sn-modal ${this.getTypeClassName()} ${this.getSizeClassName()}`
  }

  handleDialogClick(event) {
    event.stopPropagation()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open ? this.open() : this.close()
  }

  componentDidUpdate(prevProps) {
    if(!this.state.open && prevProps.open && this.props.onClose) {
      this.props.onClose()
    }
  }

  renderBackdrop() {
    return (
      <div className="sn-modal__backdrop is-visible"></div>
    )
  }

  render() {
    return(
      <div>
        {this.state.open ? this.renderBackdrop() : null}

        <div className="sn-modal" onClick={this.close.bind(this)}>
          <div className={this.getClassName()} onClick={this.handleDialogClick}>
            <div className="sn-modal__content">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main