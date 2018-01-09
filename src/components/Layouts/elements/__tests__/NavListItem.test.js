import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class NavListItem extends React.Component {
  static propTypes = {
    expandable: PropTypes.bool,
    expandableOnHover: PropTypes.bool,
    expanded: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    expandable: false,
    expandableOnHover: false,
    expanded: false,
    onClick: null
  }

  constructor(props) {
    super(props)

    this.state = ({
      expanded: props.expanded
    })

    this.toggleExpansion = this.toggleExpansion.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expanded !== this.state.expanded) {
      this.setState({ expanded: nextProps.expanded })
    }
  }

  render() {
    const componentClasses = classNames('sn-nav__list__item',{
      'sn-nav__list__item--expandable': this.props.expandable,
      'is-expanded': this.state.expanded
    })

    return (
      <li className={componentClasses} onClick={this.toggleExpansion}>
        {this.props.children}
      </li>
    )
  }

  toggleExpansion(event) {
    if (this.props.onClick) this.props.onClick(event)

    if (!this.props.expandable) return

    this.setState(prevState => ({
      expanded: !prevState.expanded
    }))
  }
}

export default NavListItem