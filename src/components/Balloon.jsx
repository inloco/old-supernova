import React, { PropTypes } from "react"
import Icon from './Icon'

class Ballon extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string
  }

  render() {
    const{ value, icon, label } = this.props
    const labelWithIcon = <span><Icon code={icon || ''} /> { label }</span>
    const title = icon ? labelWithIcon : label

    return (
      <div className="sn-balloon sn-balloon--squared">
        <div className="sn-balloon__title">
          { title }
        </div>
        <div className="sn-balloon__value">{ value }</div>
      </div>
    )
  }
}

export default Ballon