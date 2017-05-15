import React from "react"
import PropTypes from "prop-types"
import { getColumnClassByType } from "../../../helpers/table"

class Head extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    color: ""
  }

  render() {
    const { children, type } = this.props
    const style = {
      color: this.props.color
    }

    return (
      <th
        className={ getColumnClassByType(type) }
        style={this.props.color ? style : null}
        onClick={this.props.onClick}>
        { children }
      </th>
    )
  }
}

export default Head
