import React, { PropTypes } from "react"

class Profile extends React.Component {
  render() {
    return (
      <div className="sn-layout__drawer-user">
        <div className="sn-layout__drawer-user__avatar">
          <div className="sn-layout__drawer-user__avatar-mask">
            <a href="" data-toggle="modal" data-target="#modal-avatar" title="Editar imagem de avatar">
              <img className="sn-layout__drawer-user__avatar-image" src={this.props.avatarSrc} alt=""/>
            </a>
          </div>
        </div>

        <div className="sn-layout__drawer-user__info">
          <span className="sn-layout__drawer-user__info-name">{this.props.name}</span>
          <span className="sn-layout__drawer-user__info-contact">{this.props.email}</span>
          <ul className="sn-layout__drawer-user__info-actions">
            <li>
              <a href="#" onClick={this.props.onGoToAccount}>
                <i className="material-icons"></i>Conta
              </a>
            </li>
            <li>
              <a href="#" onClick={this.props.onSignOut}>
                <i className="material-icons"></i>Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Profile
