jest.unmock("../factories/components/input-factory")

import InputFactory from "../factories/components/input-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Input from "../../src/components/Input"

describe("Input", () => {
  const factory = new InputFactory
  const node = factory.getNode().querySelector("input")

  it("has type", () => {
    expect(node.type).toEqual("email")
  })

  it("has name", () => {
    expect(node.name).toEqual("email")
  })

  it("has value", () => {
    expect(node.value).toEqual("foo@foo.com")
  })

  it("is required", () => {
    expect(node.required).toBeTruthy
  })

  describe("not required", () => {
    const input = TestUtils.renderIntoDocument(
      <Input label="E-mail" />
    )

    const specificNode = ReactDOM.findDOMNode(input)

    it("is not required", () => {
      expect(specificNode.required).toBeTruthy
    })
  })
})
