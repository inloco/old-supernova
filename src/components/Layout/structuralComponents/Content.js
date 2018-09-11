import React from 'react'
import PropTypes from 'prop-types'

export const LayoutContentRefContext = React.createContext()

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  ref = React.createRef()

  render() {
    return (
      <div className='sn-layout__main__content' ref={this.ref}>
        <LayoutContentRefContext.Provider value={this.ref}>
          { this.props.children }
        </LayoutContentRefContext.Provider>
      </div>
    )
  }
}

export default Content