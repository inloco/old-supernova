import React from 'react'
import PropTypes from 'prop-types'

class SnNavListItem extends React.Component {
  static propTypes = {
    expandable: PropTypes.bool,
    children: PropTypes.element
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
      <li className={navlistItemClasses} onClick={this.handleExpansion}>
        { this.props.children }
      </li>
    )
  }

  handleExpansion = (event) => {
    event.stopPropagation()

    if (!this.props.expandable) return

    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }
}

export default SnNavListItem