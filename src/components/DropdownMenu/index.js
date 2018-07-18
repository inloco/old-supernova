import React from 'react'
import PropTypes from 'prop-types'
import Icon from './../Icons'

class DropdownMenu extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string.isRequired
    })),
    onClick: PropTypes.func,
    onOptionClick: PropTypes.func
  }

  static defaultProps = {
    options: [],
    onClick: () => {}
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

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.close()
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

  handleDropdownClick(event) {
    this.open()
    this.props.onClick(event)
  }

  renderOptions() {
    return (
      <div className="sn-dropdown-menu__options">
        {this.props.options.map(option => (
          <span
            onClick={this.handleOptionClick.bind(this, option)}
            key={option.label}
          >
            {option.label}
          </span>
        ))}
      </div>
    )
  }

  handleOptionClick(option, event) {
    event.stopPropagation()

    const { onOptionClick } = this.props

    onOptionClick && onOptionClick(option, event)

    this.close()
  }

  open() {
    this.setState({ open: true })
  }

  close() {
    this.setState({ open: false })
  }
}

export default DropdownMenu
