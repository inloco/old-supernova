import React, { PropTypes } from "react"
import BaseComponent from "./Component"

class Ballon extends BaseComponent {
  static propTyes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    addon: PropTypes.string
  }

  render() {
    const{ label, value, icon, color, addon } = this.props

     return (
       <div className="balloon squared">
         <div className={ "balloon-header " + color }>
           <span className={ "icon-24 " + icon }></span>
           { label }
         </div>
         <div className="balloon-body">
           { addon != null ? <span className="balloon-body-currency">{ addon }</span> : null }
           { value }
         </div>
       </div>
     )
 }
}

export default Ballon
