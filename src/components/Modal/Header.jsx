import React, { PropTypes } from "react"
import Button from "./../Button"
import Icon from "./../Icon"

class Header extends React.Component {
  render() {
    return(
      <div className="sn-modal__header">
        <Button
          onClick={this.context.onClose}
          type="button"
          className="sn-modal__header__close-button">
          <Icon code="&#xE5CD;"/>
        </Button>

        <span className="sn-modal__header__title">{this.props.title}</span>
      </div>
    )
  }
}

Header.contextTypes = {
  onClose: React.PropTypes.func
}

export default Header