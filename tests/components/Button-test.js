jest.unmock("../../src/components/Button")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Button from "../../src/components/Button"

describe("Button", () => {
  const button = TestUtils.renderIntoDocument(
    <Button label="Login" type="colored" />
  )
  const buttonNode = ReactDOM.findDOMNode(button)

  console.log(buttonNode.outerHTML)

  it("has type", () => {
    expect(buttonNode.classList.contains("sn-button--colored")).toBeTruthy()
  })

  it("has label", () => {
    expect(buttonNode.textContent).toEqual("Login")
  })

  it("is raised", () => {
    expect(buttonNode.classList.contains('sn-button--raised')).toBeTruthy()
  })

  it("is not disabled", () => {
    expect(buttonNode.disabled).toBeFalsy
  })

  describe("when is disabled", () => {
    const button = TestUtils.renderIntoDocument(
      <Button label="Login" disabled={ true } />
    )

    const buttonNode = ReactDOM.findDOMNode(button)

    it("is disabled", () => {
      expect(buttonNode.disabled).toBeTruthy
    })
  })
})