import React, { PropTypes } from "react"

class Main extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    defaultChecked: 0
  }

  renderChildren() {
    return this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        name: this.props.name,
        key: index,
        defaultChecked: index === this.props.defaultChecked,
        onChange: this.props.onChange
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
