import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Icon extends React.PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
  }

  render() {
    const { color } = this.props
    const style = { color: color }
    const classes = classNames('material-icons', this.props.className)

    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        style={style}
      >
        {this.props.code}
      </i>
    )
  }
}

export default Icon
