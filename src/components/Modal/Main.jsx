import React, { PropTypes } from "react"
import ModalCloseTrigger from "./CloseTrigger"
import Button from "./../Button"
import Label from "./../Label"

class Modal extends React.Component {
  constructor(props) {
    super()
    this.state = { isOpen: props.isOpen }
  }

  static propTyes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    btnId: PropTypes.string,
    dropdown: PropTypes.node,
    confirmSubmit: PropTypes.bool,
    confirmMessage: PropTypes.string,
    confirmLabel: PropTypes.string,
    onlyOneFooterButton: PropTypes.bool
  }

  static defaultProps = {
    className: "",
    isOpen: false,
    confirmSubmit: false,
    onlyOneFooterButton: false
  }

  componentDidMount() {
   this.refs.wrapper.addEventListener("modal:openTrigger:click", () => {
     this.setState({ isOpen: true })
     document.querySelector("body").classList.add("modal-open")
   })

   this.refs.wrapper.addEventListener("modal:closeTrigger:click", () => {
     this.setState({ isOpen: false })
     document.querySelector("body").classList.remove("modal-open")
   })
  }

  componentWillUnmount() {
    this.refs.wrapper.removeEventListener("modal:openTrigger:click")
    this.refs.wrapper.removeEventListener("modal:closeTrigger:click")
  }

  renderHeader() {
    const{ id, title, dropdown } = this.props

    return(
      <div className="modal-header">
        <ModalCloseTrigger modalId={ id }>
          <Button type="button"
                  isModal={ true }
                  iconSize="24"
                  iconName="icon-close" />
        </ModalCloseTrigger>
        <h3 className="modal-title">
          { title }
        </h3>
        { dropdown }
      </div>
    )
  }

  renderButton() {
    const{ btnId } = this.props

    return (
      <Button
        type="button"
        isModal={ true }
        btnType="primary"
        size="sm"
        style="validate-then-dismiss-modal"
        label={ this.props.label }
        id={ btnId !== undefined ? btnId : null}
        onClick={ this.props.onClickOkButton } />
    )
  }

  renderNormalButtons() {
    return (
      <div>
        { this.props.onlyOneFooterButton ? null : this.renderButton() }
        <Button
          type="button"
          btnType="default"
          size="sm"
          isModal={ true }
          label={ this.props.cancelLabel } />
      </div>
    )
  }

  renderConfirmSubmit() {
    return (
      <div>
        <Label value={ this.props.confirmMessage } />
        <Button
          type="button"
          btnType="default"
          size="sm"
          isModal={ true }
          label={ this.props.cancelLabel } />
        <Button
          type="button"
          btnType="primary"
          size="sm"
          label={ this.props.confirmLabel }
          isModal={ true }
          onClick={ this.props.onClickConfirmButton } />
      </div>
    )
  }

  renderFooter() {
    return(
      <div className="modal-footer">
        <ModalCloseTrigger modalId={ this.props.id }>
          { this.props.confirmSubmit ? this.renderConfirmSubmit() : this.renderNormalButtons() }
        </ModalCloseTrigger>
      </div>
    )
  }

  getOpenClass() {
    return this.state.isOpen ? "in" : ""
  }

  getStyle() {
    return this.state.isOpen ? {display: "block"} : null
  }

  render() {
    const{ id, className, size, children } = this.props

    return (
      <div>
        <div ref="wrapper"
             id={ id }
             className={ `modal fade ${className} ${ this.getOpenClass() }` }
             style={ this.getStyle() }>
          <div className={ `modal-dialog modal-${size}` }>
            <div className="modal-content">
              { this.renderHeader() }
              <div className="modal-body">
                { children }
              </div>
              { this.renderFooter() }
            </div>
          </div>
        </div>
        { this.state.isOpen ? <div className="modal-backdrop fade in"></div> : null }
      </div>
    )
  }
}

export default Modal
