import React, { PropTypes } from "react"

class Pill extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  static propTypes = {
    name:           PropTypes.string,
    value:          PropTypes.string,
    label:          PropTypes.string,
    defaultChecked: PropTypes.bool
  }

  static defaultProps = {
    defaultChecked: false
  }

  getRadioProps() {
    const { name, value, defaultChecked } = this.props

    return { name, value, defaultChecked }
  }

  handleClick() {
    const { onClick, onChange, value } = this.props

    if(onClick) onClick()
    if(onChange) onChange(value)
  }

  getActiveClass() {
    return this.props.defaultChecked ? 'active' : ''
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
}

export default Pill
