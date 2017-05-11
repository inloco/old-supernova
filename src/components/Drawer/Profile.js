import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../Icons'

class Profile extends React.PureComponent {
  static propTypes = {
    avatarSrc: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    onSignOut: PropTypes.func
  }

  renderAccountLink() {
    return (
      <li>
        <a onClick={this.props.onAccount}>
          <Icon code="person"/> {this.props.accountLabel || 'account'}
        </a>
      </li>
    )
  }

  renderSignOutLink() {
    return (
      <li>
        <a onClick={this.props.onSignOut}>
          <Icon code="power_settings_new"/> {this.props.signOutLabel || 'logout'}
        </a>
      </li>
    )
  }

  render() {
    return (
      <div className="sn-layout__drawer-user">
        <div className="sn-layout__drawer-user__avatar">
          <div className="sn-layout__drawer-user__avatar-mask">
            <a href="" data-toggle="modal" data-target="#modal-avatar" title="Editar imagem de avatar">
              <img
                className="sn-layout__drawer-user__avatar-image"
                src={this.props.avatarSrc}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="sn-layout__drawer-user__info">
          <span className="sn-layout__drawer-user__info-name">{this.props.name}</span>
          <span className="sn-layout__drawer-user__info-contact">{this.props.email}</span>
          <ul className="sn-layout__drawer-user__info-actions">
            {this.props.onAccount && this.renderAccountLink()}
            {this.props.onSignOut && this.renderSignOutLink()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile
