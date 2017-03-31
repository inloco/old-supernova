import React, { PropTypes } from 'react'

class Modal extends React.Component {
  static defaultProps = {
    dismiss: true,
  }

  constructor(props) {
    super(props)

    this.handleWrapClick = this.handleWrapClick.bind(this)
    this.handleBackdropClick = this.handleBackdropClick.bind(this)

    this.state = {
      open: this.props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  render() {
    const openClassName = this.state.open ? 'sn-modal--open' : ''
    const sizeClassName = this.props.size ? `sn-modal--${this.props.size}` : ''
    const typeClassName = this.props.type ? `sn-modal--${this.props.type}` : ''

    return(
      <div className={this.props.className}>
        <div
          id={this.props.id}
          className={`sn-modal ${openClassName} ${sizeClassName} ${typeClassName}`}
          onClick={this.handleBackdropClick}
        >
          <div
            className="sn-modal__wrap"
            onClick={this.handleWrapClick}
          >
            <div className="sn-modal__content">{this.props.children}</div>
          </div>
        </div>

        {this.state.open && this.renderBackdrop()}
      </div>
    )
  }

  // Modal Header uses to close on click in x button
  getChildContext() {
    return {
      onClose: this.props.onClose
    }
  }

  handleBackdropClick(event) {
    if(this.props.dismiss) {
      this.props.onClose()
    }
  }

  handleWrapClick(event) {
    event.stopPropagation()
  }

  renderBackdrop() {
    return (
      <div className="sn-modal__backdrop is-visible"></div>
    )
  }
}

Modal.childContextTypes = {
  onClose: React.PropTypes.func
}

export default Modal
