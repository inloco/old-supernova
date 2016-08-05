import React, { PropTypes } from "react"

class Tab extends React.Component {
  static propTypes = {
    label:  PropTypes.string.isRequired,
    active: PropTypes.bool
  }

  static defaultProps = {
    active: false
  }

  render() {
    const style = { display: this.props.active ? "block" : "none" }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab
