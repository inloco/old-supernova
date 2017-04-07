import React, { PropTypes } from 'react'

class BalloonBox extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    return(
      <div {...this.props} className={`sn-balloon-box ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default BalloonBox
