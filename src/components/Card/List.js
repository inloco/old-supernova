import React, { PropTypes } from 'react'

class List extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    strip: PropTypes.bool
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, strip } = this.props
    const stripClass = strip ? 'sn-card__list--strip' : ''

    return (
      <div className={`sn-card__list ${className} ${stripClass}`}>
        {this.props.children}
      </div>
    )
  }
}

export default List
