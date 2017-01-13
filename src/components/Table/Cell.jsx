import React from 'react'

const Cell = props => {
  const { head, ...cellProps } = props

  return props.head
            ? <th {...cellProps} />
            : <td {...cellProps} />
}

export default Cell