import React, { PropTypes } from "react"

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    })
  }

  getChildContext() {
    return {
      onClose: this.props.onClose
    }
  }

  handleBackdropClick(event) {
    this.props.onClose()
  }

  handleWrapClick(event) {
    event.stopPropagation()
  }

  renderBackdrop() {
    return (
      <div className="sn-modal__backdrop is-visible"></div>
    )
  }

  render() {
    return(
      <div>
        <div
          className={`sn-modal ${this.state.open ? 'sn-modal--open' : ''}`}
          id={this.props.id}
          onClick={this.handleBackdropClick.bind(this)}>

          <div
            className="sn-modal__wrap"
            onClick={this.handleWrapClick.bind(this)}>
            <div className="sn-modal__content">{this.props.children}</div>
          </div>
        </div>

        {this.state.open ? this.renderBackdrop() : null}
      </div>
    )
  }
}

Main.childContextTypes = {
  onClose: React.PropTypes.func
}

export default Main