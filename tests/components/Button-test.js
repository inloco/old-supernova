jest.unmock("../../src/components/Button")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Button from "../../src/components/Button"

describe("Button", () => {
  const fooFunc = jest.fn()

  const button = TestUtils.renderIntoDocument(
    <Button
      label="Login"
      raised
      theme="colored"
      type="submit"
      onClick={fooFunc} />
  )
  const buttonNode = ReactDOM.findDOMNode(button)

  it("has style", () => {
    expect(buttonNode.classList.contains("sn-button--colored")).toBeTruthy()
  })

  it("has type", () => {
    expect(buttonNode.type).toEqual("submit")
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

  it("executes onClick props when it is click", () => {
    TestUtils.Simulate.click(buttonNode)

    expect(fooFunc.mock.calls.length).toBeGreaterThan(0)
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
