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
            secondaryStyle="finish-button" />
  )
  const node = ReactDOM.findDOMNode(button)
  const buttonNode = node.querySelector("button")

  it("has href", () => {
    expect(node.getAttribute("href")).toEqual("/en/publishers/applications/new")
  })
  it("has type", () => {
    expect(buttonNode.type).toEqual("button")
  })

  it("has id", () => {
    expect(buttonNode.getAttribute("id")).toEqual("butotn-id")
  })

  it("has label", () => {
    expect(buttonNode.querySelector(".button-txt").textContent).toEqual("App")
  })

  it("has size", () => {
    expect(buttonNode.getAttribute("class").includes("btn-xs")).toBeTruthy
  })

  it("has icon", () => {
    expect(buttonNode.getAttribute("class").includes("icon-add")).toBeTruthy
  })

  it("has style", () => {
    expect(buttonNode.getAttribute("class").includes("btn-primary")).toBeTruthy
  })

  it("has secondaryStyle", () => {
    expect(buttonNode.getAttribute("class").includes("finish-button")).toBeTruthy
  })

  it("is not disabled", () => {
    expect(buttonNode.getAttribute("disabled")).toBeFalsy
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
              isDisabled={ true }
              isModal={ true } />
    )

    const node = ReactDOM.findDOMNode(button).querySelector("button")

    it("is disabled", () => {
      expect(node.getAttribute("disabled")).toBeTruthy
    })

    it("is modal button", () => {
      expect(node.getAttribute("data-dismiss").includes("modal")).toBeTruthy
    })

    it("has only one class", () => {
      expect(node.getAttribute("class").includes("close")).toBeTruthy
    })
  })
})
