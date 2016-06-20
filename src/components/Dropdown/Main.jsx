import React, { PropTypes } from 'react'

class Dropdown extends React.Component {  
  static propTypes = {
    icon: PropTypes.string,
    side: PropTypes.string,
    children: PropTypes.node.isRequired
  }
  
  static defaultProps = {
    icon: 'icon-more-options',
    side: 'left'
  }
  
  render() {
    const { icon, side, children } = this.props

    return (
      <div className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="#">
          <span className={ 'icon-24 ' + icon }></span>
        </a>
        <ul className={ 'dropdown-menu dropdown-menu-' + side } role="menu" aria-labelledby="dropdownMenu1">
          { children }
        </ul>
      </div>
    )
  }
}

export default Dropdown