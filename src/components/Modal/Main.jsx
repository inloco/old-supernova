import React, { PropTypes } from "react"
import ModalCloseTrigger from "./CloseTrigger"
import Button from "./../Button"
import Dropdown from "./../Dropdown/Main"
import DropdownItem from "./../Dropdown/Item"

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
    latLongTabAll: PropTypes.string,
    latLongTabOk: PropTypes.string,
    latLongTabError: PropTypes.string
  }

  static defaultProps = {
    className: "",
    isOpen: false
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

  getHeader() {
    const{ id, title, latLongTabAll } = this.props

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
        { latLongTabAll !== undefined ? this.renderDropdown() : null }
      </div>
    )
  }

  renderDropdown() {
    const{ latLongTabAll, latLongTabOk, latLongTabError } = this.props

    return(
      <Dropdown id="lat_long_dropdown" label={ `${latLongTabAll} (0)` } icon="icon-drop-down">
        <DropdownItem id="dropdown_item_id" label={ `${latLongTabAll} (0)` }/>
        <DropdownItem id="dropdown_item_id" label={ `${latLongTabOk} (0)` } />
        <DropdownItem id="dropdown_item_id" label={ `${latLongTabError} (0)` } />
      </Dropdown>
    )
  }

  getFooter() {
    const{ id, title, label, btnId, cancelLabel } = this.props

    return(
      <div className="modal-footer">
        <ModalCloseTrigger modalId={ id }>
          <Button type="button"
                  isModal={ true }
                  btnType="primary"
                  size="sm"
                  style="validate-then-dismiss-modal"
                  label={ label }
                  id={ btnId !== undefined ? btnId : null} />
          <Button type="button"
                  btnType="default"
                  size="sm"
                  isModal={ true }
                  label={ cancelLabel } />
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
              { this.getHeader() }
              <div className="modal-body">
                { children }
              </div>
              { this.getFooter() }
            </div>
          </div>
        </div>
        { this.state.isOpen ? <div className="modal-backdrop fade in"></div> : null }
      </div>
    )
  }
}

export default Modal
