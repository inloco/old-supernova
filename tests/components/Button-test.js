jest.unmock("../../src/components/Button")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Button from "../../src/components/Button"

describe("Button", () => {
  const button = TestUtils.renderIntoDocument(
    <Button id="butotn-id"
            btnType="primary"
            type="button"
            label="App"
            size="xs"
            icon="icon-add"
            href="/en/publishers/applications/new"
            style="btn-raised"
            secondaryStyle="finish-button"
            isDisabled={ false } />
  )
  const buttonNode = ReactDOM.findDOMNode(button)
  const btnNode = buttonNode.querySelector("button")

  it("has href", () => {
    expect(buttonNode.getAttribute("href")).toEqual("/en/publishers/applications/new")
  })
  it("has type", () => {
    expect(btnNode.type).toEqual("button")
  })

  it("has id", () => {
    expect(btnNode.getAttribute("id")).toEqual("butotn-id")
  })

  it("has label", () => {
    expect(btnNode.querySelector(".button-txt").textContent).toEqual("App")
  })

  it("has size", () => {
    expect(btnNode.getAttribute("class").includes("btn-xs")).toBeTruthy
  })

  it("has icon", () => {
    expect(btnNode.getAttribute("class").includes("icon-add")).toBeTruthy
  })

  it("has style", () => {
    expect(btnNode.getAttribute("class").includes("btn-primary")).toBeTruthy
  })

  it("has secondaryStyle", () => {
    expect(btnNode.getAttribute("class").includes("finish-button")).toBeTruthy
  })

  it("is not disabled", () => {
    expect(btnNode.getAttribute("disabled")).toBeFalsy
  })

  describe("when is disabled", () => {
    const button = TestUtils.renderIntoDocument(
      <Button id="butotn-id"
              btnType="default"
              type="button"
              label="App"
              size="xs"
              icon="icon-add"
              href="/en/publishers/applications/new"
              style="btn-raised"
              secondaryStyle="finish-button"
              isDisabled={ true } />
    )

    const buttonNode = ReactDOM.findDOMNode(button).querySelector("button")

    it("is disabled", () => {
      expect(buttonNode.getAttribute("disabled")).toBeTruthy
    })
  })
})
