import React, { PropTypes } from "react"

const Drawer = props => {
  return (
    <div>
      <div className="sn-layout__drawer">
        <div className="sn-layout__drawer--wrap">
          {props.children}
        </div>
      </div>

      <div className="sn-layout__obfuscator"></div>
    </div>
  )
}

export default Drawer