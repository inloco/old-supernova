import React, { PropTypes } from 'react'

class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    id: PropTypes.string,
    dataDropdownSelect: PropTypes.string,
    dataDropdownSelectText: PropTypes.string,
  }

  render() {
    const { label, href, id, dataDropdownSelect, dataDropdownSelectText } = this.props

    return (
      <li role="presentation"
          data-dropdown-select={ dataDropdownSelect !== undefined ? dataDropdownSelect : null }
          data-dropdown-select-text={ dataDropdownSelectText !== undefined ? dataDropdownSelectText : null }>
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
