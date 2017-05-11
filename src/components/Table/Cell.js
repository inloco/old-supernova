import React from 'react'
import PropTypes from 'prop-types'

class Cell extends React.PureComponent {
  static propTypes = {
    head: PropTypes.bool
  }

  render() {
    const { head, ...cellProps } = this.props

    return head ? <th {...cellProps} /> : <td {...cellProps} />
  }
}

export default Cell