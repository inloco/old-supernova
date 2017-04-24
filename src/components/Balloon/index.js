import React, { PropTypes } from 'react'
import Icon from './../Icons'

class Balloon extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    graphic: PropTypes.node,
    addon: PropTypes.string
  }

  render() {
    const { icon, label, addon, graphic } = this.props
    const title = icon ? this.renderLabelWithIcon() : label

    return (
      <div className="sn-balloon sn-balloon--squared">
        <div className="sn-balloon__title">
          {title}
        </div>
        <div className="sn-balloon__value">
          {addon && this.renderAddon()}{this.renderValue()}
        </div>
        {graphic && this.renderGraphic()}
      </div>
    )
  }

  renderGraphic() {
    return (
      <div className="sn-balloon__graphic">
        {this.props.graphic}
      </div>
    )
  }

  renderLabelWithIcon() {
    return (
      <span>
        <Icon code={this.props.icon} /> { this.props.label }
      </span>
    )
  }

  renderAddon() {
    return (
      <span className="sn-balloon__currency">
        {this.props.addon}
      </span>
    )
  }

  renderValue() {
    const { value } = this.props

    return value === 'NaN' ? 0 : value
  }
}

export default Balloon
