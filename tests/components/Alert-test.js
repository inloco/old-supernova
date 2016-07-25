jest.useRealTimers()
jest.unmock("../../src/components/Alert")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Alert from "../../src/components/Alert"

describe("Alert", () => {
  const baseNode = document.createElement("div")

  let component, node

  beforeEach(() => {
    component = ReactDOM.render(<Alert message="" active={true} />, baseNode)
    node      = ReactDOM.findDOMNode(component)
  })

  it("will be close after 2 seconds", (done) => {
    component = ReactDOM.render(<Alert message="" active={true} closeAfter={2000}/>, baseNode)

    setTimeout(() => {
      expect(component.state.active).toBeFalsy()
      done()
    }, 2000)
  })

  it("will be close after click in close button", () => {
    const btnClose = ReactDOM.findDOMNode(component.refs.btnClose)

    TestUtils.Simulate.click(btnClose)

    expect(component.state.active).toBeFalsy()
  })

  it("has alert class", () => {
    expect(node.classList.contains("sn-alert")).toBeTruthy()
  })

  it("has correct default type", () => {
    expect(node.classList.contains("sn-alert--success")).toBeTruthy()
  })

  it("is active by default", () => {
    expect(node.classList.contains("sn-alert--active")).toBeTruthy()
  })
})