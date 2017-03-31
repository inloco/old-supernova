import React, { PropTypes } from "react"

class Group extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.any,
    name: PropTypes.string
  }

  render() {
    const { label, id, className, error } = this.props

    return(
      <div
        id={id}
        className={`sn-form-group ${className || ''} ${this.errorClassName()}`}
      >
        <span className="sn-form-group__label">
          {label}
        </span>
        {this.renderChildren()}
        {error && this.renderError()}
      </div>
    )
  }

  errorClassName() {
    return this.props.error ? 'has-error' : ''
  }

  renderChildren() {
    const { name, children } = this.props

    if(name) {
      return children.map((child, index) => {
        return React.cloneElement(child, {
          name: name,
          key: index
        })
      })
    }

    return children
  }

  renderError() {
    return <span className="sn-form-group__message">{this.props.error}</span>
  }
}

export default Group