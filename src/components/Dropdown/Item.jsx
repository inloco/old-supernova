import React, { PropTypes } from 'react'

class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }
  
  render() {
    const { label, href } = this.props
    
    return (
      <li role="presentation">
        <a role="menuitem" tabindex="-1" href={ href }>
          { label }
        </a>
      </li>
    );
  }
}

export default Item
