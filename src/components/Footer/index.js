import React, { PropTypes } from 'react'

class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    chilren: PropTypes.node.isRequired
  }

  render() {
    <div className="sn-layout__footer">
      {this.props.children}
    </div>
  }
}

export default Footer