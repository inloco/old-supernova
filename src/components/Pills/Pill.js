import React, { PropTypes } from 'react'

class Pill extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  static propTypes = {
    name:           PropTypes.string,
    value:          PropTypes.string,
    label:          PropTypes.string,
    active: PropTypes.bool
  }

  static defaultProps = {
    active: false
  }

  render() {
    return (
      <label className="sn-pills__label" onClick={this.handleClick}>
        <input type="radio" {...this.getRadioProps()} />
        <span className={`sn-pills__label--content ${this.getActiveClass()}`}>
          {this.props.label}
        </span>
      </label>
    )
  }

  getRadioProps() {
    const { name, value } = this.props

    return { name, value }
  }

  handleClick() {
    const { onClick, onChange, value } = this.props

    if(onClick) onClick()
    if(onChange) onChange(value)
  }

  getActiveClass() {
    return this.props.active ? 'active' : ''
  }
}

export default Pill
