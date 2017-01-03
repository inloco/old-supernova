import React from "react"

class Paginator extends React.Component {
  render() {
    return (
      <div className="sn-paginator">
        {this.props.children}
      </div>
    )
  }
}

export default Paginator