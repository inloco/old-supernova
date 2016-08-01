jest.unmock("../factories/components/input-factory")

import InputFactory from "../factories/components/input-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Input from "../../src/components/Input"

describe("Input", () => {
  const factory = new InputFactory
  const node = factory.getNode()

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("publisher-id")
  })

  it("has type", () => {
    expect(node.getAttribute("type")).toEqual("text")
  })

  it("has placeholder", () => {
    expect(node.getAttribute("placeholder")).toEqual("Digite seu nome")
  })

  it("has name", () => {
    expect(node.getAttribute("name")).toEqual("publisher[nome]")
  })

  it("has value", () => {
    expect(node.value).toEqual("current_month")
  })

  it("has data-remote-input", () => {
    expect(node.getAttribute("data-remote-input")).toEqual("true")
  })

  it("is not required", () => {
    expect(node.getAttribute("required")).toBeFalsy()
  })

  describe("when it is required", () => {
    const input = TestUtils.renderIntoDocument(
      <Input id="publisher-id"
             type="text"
             placeholder="Digite seu nome"
             name="publisher[nome]"
             required={ true } />
    )

    const specificNode = ReactDOM.findDOMNode(input)

    it("set required with true", () => {
      expect(specificNode.required).toBeTruthy()
    })
  })
})
