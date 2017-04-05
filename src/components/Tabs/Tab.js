import React, { PropTypes } from "react"

class Tab extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    active: PropTypes.bool
  }

  render() {
    const style = { display: this.props.active ? 'block' : 'none' }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab
