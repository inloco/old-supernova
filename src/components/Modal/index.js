import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Modal extends React.Component {
  static defaultProps = {
    dismiss: true,
    open: false,
    size: 'md',
    type: '',
    centered: false,
    className: ''
  }

  static propTypes = {
    dismiss: PropTypes.bool,
    open: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
    centered: PropTypes.bool,
    children: PropTypes.any,
    onClose: PropTypes.func,
    className: PropTypes.string
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
    const centeredClassName = this.props.centered ? 'sn-modal--centered' : ''

    return(
      <div>
        <div
          id={this.props.id}
          className={this.getClassName()}
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

  getClassName() {
    return classNames('sn-modal', this.props.className, {
      'sn-modal--open': this.props.open,
      [`sn-modal--${this.props.size}`]: this.props.size,
      [`sn-modal--${this.props.type}`]: this.props.type,
      'sn-modal--centered': this.props.centered
    })
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
  onClose: PropTypes.func
}

export default Modal
