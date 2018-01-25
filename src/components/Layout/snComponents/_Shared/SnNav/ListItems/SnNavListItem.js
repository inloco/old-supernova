import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class SnNavListItem extends React.Component {
  static propTypes = {
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

  render() {
    const navlistItemClasses = classNames('sn-nav__list__item',{
      'sn-nav__list__item--expandable': this.props.expandable,
      'is-expanded': this.state.expanded
    })

    return (
      <li
        className={  navlistItemClasses }
        onClick={ this.handleExpansion }
        onMouseLeave={this.blurListItem}
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

  blurListItem = () => {
    setTimeout(() => {
      this.setState({ expanded: false })
    }, 200)
  }
}

export default SnNavListItem