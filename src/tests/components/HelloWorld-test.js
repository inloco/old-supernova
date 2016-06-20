jest.unmock("../../components/HelloWorld")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import HelloWorld from "../../components/HelloWorld"

describe("HelloWorld", () => {
  it("show hello message with the name", () => {    
    const hello = TestUtils.renderIntoDocument(
      <HelloWorld name="Bruno"/>
    )
    
    const helloNode = ReactDOM.findDOMNode(hello)
    
    expect(helloNode.textContent).toEqual("Hello, Bruno!")
  })  
})