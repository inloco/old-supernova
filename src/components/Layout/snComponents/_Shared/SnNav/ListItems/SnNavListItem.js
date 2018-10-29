import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SnNavListItem extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    expandable: PropTypes.bool,
    children: PropTypes.any
  }

  static defaultProps = {
    expandable: false
  }

  constructor(props) {
    super(props)

    this.state = ({ expanded: false })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { className, expandable } = this.props
    const navlistItemClasses = classNames(
      'sn-nav__list__item',
      className,
      {
        'sn-nav__list__item--expandable': expandable,
        'is-expanded': this.state.expanded
      }
    )

    return (
      <li
        className={  navlistItemClasses }
        onClick={ this.handleExpansion }
        ref={node => this.wrapperRef = node}
      >
        { this.props.children }
      </li>
    )
  }

  handleExpansion = (event) => {
    event.stopPropagation()

    if (!this.props.expandable) return

    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ expanded: false })
    }
  }
}

export default SnNavListItem