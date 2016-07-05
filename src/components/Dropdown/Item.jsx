import React, { PropTypes } from 'react'

class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    id: PropTypes.string
  }

  render() {
    const { label, href, id } = this.props

    return (
      <li role="presentation">
        <a id={ id !== undefined ? id : null }
           role="menuitem"
           tabIndex="-1"
           href={ href !== undefined ? href : null }>
          { label }
        </a>
      </li>
    );
  }
}

export default Item
