import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ContentLayout extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const className = classNames('sn-layout__main__content', this.props.className)

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default ContentLayout