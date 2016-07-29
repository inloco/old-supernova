import React, { PropTypes } from "react"

class Col extends React.Component {
  static propTypes = {
    center: PropTypes.bool
  }

  static defaultProps = {
    size:   "auto"
  }

  getPositionClassName() {
    return this.props.center ?  `sn-card--center` : null
  }

  getSizeClassName() {
    return `sn-card__col--${this.props.size}`
  }

  getClassName() {
    return `sn-card__col ${this.getSizeClassName()} ${this.getPositionClassName()}`
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    )
  }
}

export default Col