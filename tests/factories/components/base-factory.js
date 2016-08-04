import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

class Factory {
  getNode(props) {
    return ReactDOM.findDOMNode(this.render(props))
  }

  render(props) {
    return TestUtils.renderIntoDocument(
     this.template(props)
    )
  }

  template(props) { }
}

export default Factory