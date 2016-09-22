import React, { PropTypes } from "react"

class Radio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  render() {
    const { label, ...inputProps } = this.props

    return (
      <div className="sn-radio">
        <label>
          <input type="radio" {...inputProps}/>
          <i className="sn-input__icon"></i>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default Radio
