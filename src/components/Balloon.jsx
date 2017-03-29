import React, { PropTypes } from "react"
import Icon from './Icons'

class Ballon extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    graphic: PropTypes.node
  }

  renderGraphic() {
    return (
      <div className="sn-balloon__graphic">
        {this.props.graphic}
      </div>
    )
  }

  render() {
    const{ value, icon, label, addon, graphic } = this.props
    const labelWithIcon = <span><Icon code={icon || ''} /> { label }</span>
    const title = icon ? labelWithIcon : label

    return (
      <div className="sn-balloon sn-balloon--squared">
        <div className="sn-balloon__title">
          {title}
        </div>
        <div className="sn-balloon__value">
          {addon && <span className="sn-balloon__currency">{addon}</span>}{value}
        </div>
        {graphic && this.renderGraphic()}
      </div>
    )
  }
}

export default Ballon
