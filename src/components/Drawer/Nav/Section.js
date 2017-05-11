import React from 'react'
import PropTypes from 'prop-types'

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
