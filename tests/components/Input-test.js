jest.unmock("../factories/components/input-factory")

import InputFactory from "../factories/components/input-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Input from "../../src/components/Input"

describe("Input", () => {
  const factory = new InputFactory
  const node = factory.getNode().querySelector("input")

  it("has id", () => {
    expect(node.getAttribute("id").includes("publisher-id")).toBeTruthy
  })

  it("has type", () => {
    expect(node.getAttribute("type").includes("text")).toBeTruthy
  })

  it("has placeholder", () => {
    expect(node.getAttribute("placeholder")
               .includes("Digite seu nome")).toBeTruthy
  })

  it("has name", () => {
    expect(node.getAttribute("name")
               .includes("publisher[nome]")).toBeTruthy
  })

  it("has value", () => {
    expect(node.gtextContent).toEqual("current_month")
  })

  it("has data-remote-input", () => {
    expect(node.getAttribute("data-remote-input")
               .includes(true)).toBeTruthy
  })

  it("is not required", () => {
    expect(node.getAttribute("required")).toBeFalsy
  })

  describe("not required", () => {
    const input = TestUtils.renderIntoDocument(
      <Input id="publisher-id"
             type="text"
             placeholder="Digite seu nome"
             name="publisher[nome]"
             isRequired={ true } />
    )

    const specificNode = ReactDOM.findDOMNode(input).querySelector("input")

    it("is required", () => {
      expect(specificNode.getAttribute("required")).toBeTruthy
    })
  })
})
