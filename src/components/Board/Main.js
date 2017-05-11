import React from 'react'
import PropTypes from 'prop-types'

const Board = props => {
  const bleedClassName = props.bleed ? 'sn-board--bleed' : ''

  return (
    <div className={`sn-board ${bleedClassName}`}>
      {props.children}
    </div>
  )
}

Board.propTypes = {
  bleed: PropTypes.bool
}

export default Board