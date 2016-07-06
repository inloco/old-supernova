import React, { PropTypes } from "react"
import Input from "../Input"

class Dropdown extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    side: PropTypes.string,
    label: PropTypes.string,
    secondaryLabel: PropTypes.string,
    secondaryIcon: PropTypes.string,
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    idInput: PropTypes.string,
    nameInput: PropTypes.string,
    valueInput: PropTypes.string,
    dataRemoteInput: PropTypes.string
  }

  static defaultProps = {
    icon: 'icon-more-options',
    side: 'left'
  }

  getSecondaryLabel() {
    const { secondaryLabel } = this.props

    return (
      secondaryLabel !== undefined ? <p className="type-caption secondary-txt">{ secondaryLabel }</p> : null
    )
  }

  getSecondaryIcon() {
    const { secondaryIcon } = this.props

    return (
      secondaryIcon !== undefined ? <span className={ "icon-16 " + secondaryIcon + " chart-icons disabled-txt" }></span> : null
    )
  }

  getLabel() {
    const { label } = this.props

    return (
      label !== undefined ? <span className="type-body-1"> { label } </span> : null
    )
  }

  render() {
    const { icon, side, children, id } = this.props

    return (
      <div id={ id !== undefined ? id : null } className="dropdown">
        { this.getSecondaryLabel() }
        { this.getSecondaryIcon() }
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="#">
          { this.getLabel() }
          <span className={ 'icon-24 ' + icon }></span>
        </a>
        <ul className={ 'dropdown-menu dropdown-menu-' + side } role="menu" aria-labelledby="dropdownMenu1">
          { children }
        </ul>
      </div>
    )
  }
}

export default Dropdown
