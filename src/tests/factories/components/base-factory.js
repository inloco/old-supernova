import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

class Factory {
  getNode() {
    return ReactDOM.findDOMNode(this.render())
  }
  
  render() {
    return TestUtils.renderIntoDocument(
     this.template()
    )
  }
  
  template() { }
}

export default Factory