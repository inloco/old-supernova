import React from 'react'
import onClickOutside from 'react-onclickoutside'
import Icon from './Icon'

class DropdownMenu extends React.Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props)

    this.handleDropdownClick = this.handleDropdownClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    this.state = {
      open: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside() {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ open: false })
    }
  }

  render() {
    return (
      <div
        className="sn-dropdown-menu"
        onClick={this.handleDropdownClick}
        ref={node => this.wrapperRef = node}
      >
        <Icon code="more_vert"/>

        {this.state.open && this.renderOptions()}
      </div>
    )
  }

  handleDropdownClick() {
    this.setState({ open: true })
  }

  renderOptions() {
    return (
      <div className="sn-dropdown-menu__options">
        {this.props.options.map(option => (
          <a key={option.href} href={option.href}>{option.label}</a>
        ))}
      </div>
    )
  }
}

export default DropdownMenu
