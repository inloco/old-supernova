import React from "react"
import ReactDOM from "react-dom"

class Component extends React.Component {
  componentDidMount() {
    this._addWrapperClass()
  }
  
  _addWrapperClass() {
    const { wrapperClass } = this.props
    
    this._getNode().classList.add(wrapperClass)
  }
  
  _addWrapperId() {
    const { wrapperId } = this.props
        
    this._getNode().id = wrapperId
  }
  
  _getNode() {
    return ReactDOM.findDOMNode(this)
  }
}

export default Component