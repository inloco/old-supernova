import React from 'react'
import PropTypes from 'prop-types'

class Board extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    bleed: PropTypes.any
  }

  render() {
    const bleedClassName = this.getBleedClassName()

    return (
      <div className={`sn-board ${bleedClassName}`}>
        {this.props.children}
      </div>
    )
  }

  getBleedClassName() {
    const { bleed } = this.props

    if(bleed) {
      return typeof bleed === 'string'
                ? `sn-board--bleed-${bleed}`
                : 'sn-board--bleed'
    }

    return ''
  }
}

export default Board