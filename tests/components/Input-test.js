jest.unmock("../../src/components/Input")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Input from "../../src/components/Input"

describe("Input", () => {
  const input = TestUtils.renderIntoDocument(
    <Input id="publisher-id"
           type="text"
           placeholder="Digite seu nome"
           name="publisher[nome]"
           isRequired={ false } />
  )

  const inputNode = ReactDOM.findDOMNode(input).querySelector("input")

  it("has id", () => {
    expect(inputNode.getAttribute("id").includes("publisher-id")).toBeTruthy
  })

  it("has type", () => {
    expect(inputNode.getAttribute("type").includes("text")).toBeTruthy
  })

  it("has placeholder", () => {
    expect(inputNode.getAttribute("placeholder")
                    .includes("Digite seu nome")).toBeTruthy
  })

  it("has name", () => {
    expect(inputNode.getAttribute("name")
                    .includes("publisher[nome]")).toBeTruthy
  })

  it("is not required", () => {
    expect(inputNode.getAttribute("required")).toBeFalsy
  })

  describe("not required", () => {
    const input = TestUtils.renderIntoDocument(
      <Input id="publisher-id"
             type="text"
             placeholder="Digite seu nome"
             name="publisher[nome]"
             isRequired={ true } />
    )

    const inputNode = ReactDOM.findDOMNode(input).querySelector("input")

    it("is required", () => {
      expect(inputNode.getAttribute("required")).toBeTruthy
    })
  })
})
