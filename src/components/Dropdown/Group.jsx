import React from 'react'
import PropTypes from "prop-types"

class Group extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  getChildren() {
    const { children } = this.props

    return children.map((child, index) => {
      return (
        <div className="flex-auto" key={ index }>
          { child }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="subheader">
        <div className="subheader-content">
          <div className="flex-auto subheader-form">
            <div className="layout horizontal col-gutter-small">
              { this.getChildren() }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Group
