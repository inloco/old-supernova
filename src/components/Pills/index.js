import React from 'react'
import PropTypes from 'prop-types'

class Pills extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    active: PropTypes.number
  }

  static defaultProps = {
    name: '',
    active: 0
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
        active: index === this.props.active,
        onChange: this.props.onChange
      })
    })
  }
}

export default Pills
