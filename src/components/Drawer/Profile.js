import React, { PropTypes } from 'react'

const Profile = props => {
  return(
    <div className="sn-layout__drawer-user">
      <div className="sn-layout__drawer-user__avatar">
        <div className="sn-layout__drawer-user__avatar-mask">
          <a href="" data-toggle="modal" data-target="#modal-avatar" title="Editar imagem de avatar">
            <img
              className="sn-layout__drawer-user__avatar-image"
              src={props.avatarSrc}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="sn-layout__drawer-user__info">
        <span className="sn-layout__drawer-user__info-name">{props.name}</span>
        <span className="sn-layout__drawer-user__info-contact">{props.email}</span>
        <ul className="sn-layout__drawer-user__info-actions">
          <li>
            {props.accountElement}
          </li>
          <li>
            <a href="#" onClick={props.onSignOut}>
              <i className="material-icons"></i>Sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

Profile.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  onSignOut: PropTypes.func
}

export default Profile
