import React, { PropTypes } from 'react'

class Pills extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultChecked: PropTypes.number
  }

  static defaultProps = {
    name: '',
    defaultChecked: 0
  }

  render() {
    return (
      <div className="sn-pills">
        {this.renderChildren()}
      </div>
    )
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
}

export default Pills
