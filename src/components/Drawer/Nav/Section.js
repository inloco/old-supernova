import React, { PropTypes } from 'react'

const Section = props => {
  return (
    <div className="sn-layout__drawer-navigation__section">
      {props.title}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section
