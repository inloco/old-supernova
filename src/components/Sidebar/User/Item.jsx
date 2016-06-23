import React, { PropTypes } from "react"

class Item extends React.Component {
  static propTyes = {
    label: PropTypes.string,
    addon: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string
  }

  render() {
    const{ label, addon, value, icon } = this.props

    return (
      <div className="user-credits">
        <div className="user-credits-cash">
          <p className="credits-title">
            { label }
          </p>
          <span className={ "icon-nav " + icon }></span>
          <span className="user-currency">{ addon }</span>
          <span className="user-cash">{ value }</span>
          <span className="icon-drop icon-expand-downs"></span>
        </div>
      </div>
    )
  }
}

export default Item
