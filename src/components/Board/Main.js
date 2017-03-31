import React, { PropTypes } from 'react'

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