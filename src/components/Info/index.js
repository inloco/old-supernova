import React from 'react'
import PropTypes from 'prop-types'

class Info extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const{ text } = this.props

    return (
      <span className="helper-bottom-left" title={ text }>
        <span className="icon-16 icon-info"></span>
      </span>
    )
  }
}

export default Info