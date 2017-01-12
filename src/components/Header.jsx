import React, { PropTypes } from 'react'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    withDrawerButton: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    withDrawerButton: true
  }

  renderDrawerButton() {
    return (
      <div className="sn-layout__drawer-button" aria-expanded="false">
        <i className="material-icons">&#xE5D2;</i>
      </div>
    )
  }

  renderSubTitle() {
    return (
      <span className="sn-layout__subtitle">
        {this.props.subTitle}
      </span>
    )
  }

  renderChildren() {
    return (
      <div className="sn-layout__navigation">
        {this.props.children}
      </div>
    )
  }

  render() {
    return (
      <header className="sn-layout__header">
        {this.props.withDrawerButton && this.renderDrawerButton()}
        <div className="sn-layout__title-group">
          <div className="sn-layout__title-wrap">
            <span className="sn-layout__title">
              {this.props.title}
            </span>
            {this.props.subTitle && this.renderSubTitle()}
          </div>
        </div>
        {this.props.children && this.renderChildren()}
      </header>
    )
  }
}

export default Header
