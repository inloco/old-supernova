import React from "react"
import PropTypes from "prop-types"

class CloseTrigger extends React.Component {
  static propTyes = {
    modalId: PropTypes.string.isRequired,
    id: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  handleClick() {
    const event = new Event("modal:closeTrigger:click")
    document.getElementById(this.props.modalId).dispatchEvent(event)
  }

  render() {
    const{ id, modalId, children } = this.props

     return (
       <span id={ id !== undefined ? id : null }
             data-modal-id={ modalId }
             onClick={ this.handleClick.bind(this) }>
        { children }
       </span>
     )
 }
}

export default CloseTrigger
