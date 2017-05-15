import React from 'react'
import PropTypes from "prop-types"

class Item extends React.Component {
  static propTypes = {
    href: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool
  }

  static defaultProps = {
    active: false
  }

  getActiveClassName() {
    return this.props.active ? "active" : ""
  }

  render() {
    const { href, label, icon } = this.props

    return (
      <li>
        <a href={ href !== undefined ? href : null }>
          <span className={ `icon-24 ${icon} ${this.getActiveClassName()}` }>
            { label !== undefined ? label : null }
          </span>
        </a>
      </li>
    );
  }
}

export default Item
