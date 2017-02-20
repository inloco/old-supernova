import React, { PropTypes } from "react"

class Group extends React.Component {
  errorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  renderChildren() {
    const { name, children } = this.props

    if(name) {
      return children.map((child, index) => {
        return React.cloneElement(child, {
          name: name,
          key:  index
        })
      })
    }

    return children
  }

  renderError() {
    return <span className="sn-form-group__message">{this.props.error}</span>
  }

  render() {
    const { label, id } = this.props

    return(
      <div className={`sn-form-group ${this.props.className} ${this.errorClassName()}`} id={id}>
        <span className="sn-form-group__label">{label}</span>
        {this.renderChildren()}
        {this.props.error && this.renderError()}
      </div>
    )
  }
}

Group.defaultProps = {
  className: ""
}

export default Group