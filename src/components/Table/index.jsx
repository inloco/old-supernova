import React, { PropTypes } from "react"

class Table extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  getClassNameByProps() {
    return [
      this.props.className,
      this.props.stripped ? "sn-table--stripped" : null,
      this.props.bordered ? "sn-table--bordered" : null,
      this.props.flat ? "sn-table--flat" : null,
      this.props.onlyContent ? "sn-table--only-content" : null
    ].join(" ")
  }

  render() {
    return (
      <table
        style={this.props.style}
        className={`sn-table ${this.getClassNameByProps()}`}
      >
        {this.props.children}
      </table>
    )
  }
}

export default Table