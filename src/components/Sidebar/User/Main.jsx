import React, { PropTypes } from "react"
import UserItem from "./Item"
import Dropdown from "../../Dropdown/Main"
import DropdownItem from "../../Dropdown/Item"

class User extends React.Component {
  static propTyes = {
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
    creditsCash: PropTypes.string,
    creditsCurrency: PropTypes.string,
    creditsTitle: PropTypes.string,
    userImpersonateHref: PropTypes.string,
    userImpersonateLabel: PropTypes.string
  }

  getUserAvatar() {
    const{ avatarSrc } = this.props

    return (
      <div className="user-avatar-mask">
        <img className="avatar" src={ avatarSrc }/>
      </div>
    )
  }

  getUserImpersonate() {
    const{ userImpersonateHref, userImpersonateLabel } = this.props

    return (
      <a href={ userImpersonateHref }>
        { userImpersonateLabel }
      </a>
    )
  }

  getUserInfo() {
    const{ userName, userEmail, currentDropdownItemName, userImpersonateLabel } = this.props

    return(
      <div>
        <span className="user-name">
          { userName }
        </span>
        <span className="user-type">
          { userEmail }
        </span>
        { currentDropdownItemName !== undefined ? this.getDropdown() : null }
        { userImpersonateLabel !== undefined ? this.getUserImpersonate() : null }
        { this.getUserLogin() }
      </div>
    )
  }

  getDropdown() {
    const{ currentDropdownItemName, dropdownItemHref, dropdownItemName } = this.props

    return (
      <Dropdown label={ currentDropdownItemName }
                side="center"
                icon="icon-drop-down">
        <DropdownItem label={ dropdownItemName } href={ dropdownItemHref } />
      </Dropdown>
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

  getUserCredits() {
    const{ creditsCash, creditsCurrency, creditsTitle } = this.props

    return (
      <UserItem value={ creditsCash }
                addon={ creditsCurrency }
                label={ creditsTitle }
                icon="icon-nav-cash" />
    )
  }

  render() {
    const{ creditsCash } = this.props

    return (
      <div className="user">
        <div className="user-avatar">
          { this.getUserAvatar() }
        </div>
        <div className="user-info">
          { this.getUserInfo() }
        </div>
        { creditsCash !== undefined ? this.getUserCredits() : null }
      </div>
    )
  }
}

export default User
