import React, { PropTypes } from 'react'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.any.isRequired,
    subtitle: PropTypes.string,
    drawerButton: PropTypes.bool
  }

  static defaultProps = {
    drawerButton: true
  }

  renderDrawerButton() {
    return (
      <div className="sn-layout__drawer-button" aria-expanded="false">
        <i className="material-icons">menu</i>
      </div>
    )
  }

  renderSubTitle() {
    return (
      <span className="sn-layout__subtitle">
        {this.props.subtitle}
      </span>
    )
  }

  renderRightElement() {

    return (
      <div className="sn-layout__navigation is-hidden--tablet-threshold">
        {this.props.rightElement}
      </div>
    )
  }

  render() {
    return (
      <header className="sn-layout__header">
        {this.props.drawerButton && this.renderDrawerButton()}
        <div className="sn-layout__title-group">
          <div className="sn-layout__title-wrap">
            <span className="sn-layout__title">
              {this.props.title}
            </span>
            {this.props.subtitle && this.renderSubTitle()}
          </div>
        </div>
        {this.props.rightElement && this.renderRightElement()}
      </header>
    )
  }
}

export default Header
