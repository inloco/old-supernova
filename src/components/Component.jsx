import React from "react"
import ReactDOM from "react-dom"

class Component extends React.Component {
  componentDidMount() {
    this._addWrapperClass()
    this._addWrapperId()
  }
  
  _addWrapperClass() {
    const { wrapperClass } = this.props
    
    if(typeof wrapperClass !== "undefined") {
      this._getNode().classList.add(wrapperClass)      
    }
  }
  
  _addWrapperId() {
    const { wrapperId } = this.props
        
    if(typeof wrapperId !== "undefined") {
      this._getNode().id = wrapperId      
    }
  }
  
  _getNode() {
    return ReactDOM.findDOMNode(this)
  }
}

export default Component