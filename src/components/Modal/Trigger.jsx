import React, { PropTypes } from "react"

class Trigger extends React.Component {
  static propTyes = {
    id: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    const{ id, modalId, children } = this.props

     return (
       <div id={ id } data-modal-id={ modalId }>
        { children }
       </div>
     )
 }
}

export default Trigger
