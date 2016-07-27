import React, { PropTypes } from "react"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = { open: this.props.open }
  }

  open() {
    document.querySelector("body").classList.add("modal-open")

    this.setState({ open: true })
  }

  close() {
    document.querySelector("body").classList.remove("modal-open")

    this.setState({ open: false })
  }

  handleDialogClick(event) {
    event.stopPropagation()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.open ? this.open() : this.close()
  }

  componentDidUpdate(prevProps) {
    if(!this.state.open && prevProps.open) {
      this.props.onClose()
    }
  }

  renderBackdrop() {
    return (
      <div className="modal-backdrop in"></div>
    )
  }

  render() {
    return(
      <div>
        {this.state.open ? this.renderBackdrop() : null}

        <div className="modal" onClick={this.close.bind(this)}>
          <div className="modal-dialog modal-lg" onClick={this.handleDialogClick}>
            <div className="modal-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main