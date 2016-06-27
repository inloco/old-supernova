import React from "react"
import ReactDOM from "react-dom"

class Component extends React.Component {
  componentDidMount() {
    this._addWrapperClass()
  }
  
  _addWrapperClass() {
    const wrapper = ReactDOM.findDOMNode(this)
    const { wrapperClass } = this.props
    
    wrapper.classList.add(wrapperClass)
  }
}

export default Component