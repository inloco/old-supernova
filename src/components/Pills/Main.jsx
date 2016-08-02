import React, { PropTypes } from "react"

class Main extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  renderChildren() {
    return this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        name:           this.props.name,
        key:            index,
        defaultChecked: index === 0
      })
    })
  }

  render() {
    return (
      <div className="sn-pills">
        {this.renderChildren()}
      </div>
    )
  }
}

export default Main