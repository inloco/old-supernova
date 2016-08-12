import React, { PropTypes } from "react"

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="sn-layout__drawer">
          {this.props.children}
        </div>

        <div className="sn-layout__obfuscator"></div>
      </div>
    )
  }
}

export default Main