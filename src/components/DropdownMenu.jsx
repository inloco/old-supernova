import React, { PropTypes } from 'react'
import Icon from './Icons'

class DropdownMenu extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired
    }))
  }

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
          <span
            onClick={this.handleOptionClick.bind(this, option)}
            key={option.href}
          >
            {option.label}
          </span>
        ))}
      </div>
    )
  }

  handleOptionClick(event, option) {
    const { onOptionClick } = this.props

    onOptionClick && onOptionClick(event, option)
  }
}

export default DropdownMenu
