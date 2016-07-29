jest.unmock("../../src/components/Tooltip")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Tooltip from "../../src/components/Tooltip"

describe("Tooltip", () => {
  const tooltip = TestUtils.renderIntoDocument(
    <Tooltip message="Foo message">Foo</Tooltip>
  )
  const tooltipNode = ReactDOM.findDOMNode(tooltip)

  it("has message", () => {
    expect(tooltipNode.getAttribute("aria-label")).toEqual("Foo message")
  })

  it("has children", () => {
    expect(tooltipNode.textContent).toEqual("Foo")
  })

  it("has tooltip className", () => {
    expect(tooltipNode.classList.contains("sn-tooltips")).toBeTruthy()
  })

  it("has position className", () => {
    expect(tooltipNode.classList.contains("sn-tooltips--top")).toBeTruthy()
  })
})