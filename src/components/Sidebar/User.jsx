import React, { PropTypes } from "react"

class User extends React.Component {
  static propTyes = {
    avatarName: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userName: PropTypes.string,
    currentDropdownItemName: PropTypes.string,
    dropdownItemHref: PropTypes.string,
    dropdownItemName: PropTypes.string,
    accountHref: PropTypes.string.isRequired,
    accountLabel: PropTypes.string.isRequired,
    logoutHref: PropTypes.string.isRequired,
    logoutLabel: PropTypes.string.isRequired,
    userCreditsCash: PropTypes.string,
    userCreditsCurrency: PropTypes.string,
    userCreditsTitle: PropTypes.string
  }

  getUserAvatar() {
    const{ avatarName, avatarSrc } = this.props

    return (
      <div className="user-avatar-mask">
        <img data-image={ avatarName } className="avatar" src={ avatarSrc }/>
      </div>
    )
  }

  getUserInfo() {
    const{ userName, userEmail, currentDropdownItemName } = this.props

    return(
      <div>
        <span className="user-name">
          { userName }
        </span>
        <span className="user-type">
          { userEmail }
        </span>
        { currentDropdownItemName !== undefined ? this.getDropdown(currentDropdownItemName) : null}
        { this.getUserLogin() }
      </div>
    )
  }

  getDropdown(currentDropdownItemName) {
    const{ dropdownItemHref, dropdownItemName } = this.props

    return (
      <div className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="">
          <span className="type-body-1">
            { currentDropdownItemName }
          </span>
          <span className="icon-24 icon-drop-down"></span>
        </a>
        <ul className="dropdown-menu dropdown-menu-center" role="menu" aria-labelledby="dropdownMenu2">
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href={ dropdownItemHref }>
              { dropdownItemName }
            </a>
          </li>
        </ul>
      </div>
    )
  }

  getUserLogin() {
    const{ accountHref, accountLabel, logoutHref, logoutLabel } = this.props

    return (
      <ul className="user-login">
        <li>
          <a href={ accountHref }>
            <span className="icon-16 icon-user"></span>
            { accountLabel }
          </a>
        </li>
        <li>
          <a href={ logoutHref } data-toggle="modal" data-target="#modal-logout">
            <span className="icon-16 icon-turn-off"></span>
            { logoutLabel }
          </a>
        </li>
      </ul>
    )
  }

  getUserCredits(userCreditsCash) {
    const{ userCreditsCurrency, userCreditsTitle } = this.props

    return (
      <div className="user-credits">
        <div className="user-credits-cash">
          <p className="credits-title">
            { userCreditsTitle }
          </p>
          <span className="icon-nav icon-nav-cash"></span>
          <span className="user-currency">{ userCreditsCurrency }</span>
          <span className="user-cash">{ userCreditsCash }</span>
          <span className="icon-drop icon-expand-downs"></span>
        </div>
      </div>
    )
  }

  render() {
    const{ userCreditsCash } = this.props

    return (
      <div className="user">
        <div className="user-avatar">
          { this.getUserAvatar() }
        </div>
        <div className="user-info">
          { this.getUserInfo() }
        </div>
        { userCreditsCash !== undefined ? this.getUserCredits(userCreditsCash) : null }
      </div>
    )
  }
}

export default User
