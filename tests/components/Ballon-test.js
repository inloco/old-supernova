jest.unmock("../../src/components/Ballon")
jest.unmock("../../src/components/Component")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Ballon from "../../src/components/Ballon"
import hasWrapperClass from "../shared/hasWrapperClass"

describe("Ballon", () => {
  const ballon = TestUtils.renderIntoDocument(
    <Ballon label="impressions"
            value="0"
            icon="icon-impressions"
            color="balloon-impressions"
            wrapperClass="foo-wrapper" />
  )
  const ballonNode = ReactDOM.findDOMNode(ballon)
  
  hasWrapperClass(ballonNode, "foo-wrapper")

  it("has impressions on ballon-header", () => {
    expect(ballonNode.querySelector(".balloon-header").textContent).toEqual("impressions")
  })

  it("has 0 on ballon-body", () => {
    expect(ballonNode.querySelector(".balloon-body").textContent).toEqual("0")
  })

  it("has icon-impressions class", () => {
    expect(ballonNode.getAttribute("class").includes("icon-impressions")).toBeTruthy
  })

  it("has balloon-impressions calss", () => {
    expect(ballonNode.getAttribute("class").includes("balloon-impressions")).toBeTruthy
  })
})
