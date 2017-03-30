import React, { PropTypes } from 'react'
import Icon from './../Icons'

const Profile = props => {
  const accountLink = (
    <li>
      <a onClick={props.onAccount}>
        <Icon code="person"/> {props.accountLabel || 'account'}
      </a>
    </li>
  )

  const signOutLink = (
    <li>
      <a onClick={props.onSignOut}>
        <Icon code="power_settings_new"/> {props.signOutLabel || 'logout'}
      </a>
    </li>
  )

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
          {props.onAccount && accountLink}
          {props.onSignOut && signOutLink}
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
