jest.unmock("../../factories/components/pills-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import PillsFactory from "../../factories/components/pills-factory"

describe("Pills items", () => {
  const factory = new PillsFactory
  const itemNode = factory.getNode().children[0]

  it("has 'pills items' className", () => {
    expect(itemNode.classList.contains("sn-pills__label")).toBeTruthy()
  })

  it("has content", () => {
    const content = itemNode.querySelector(".sn-pills__label--content").textContent

    expect(content).toEqual("Item 1")
  })

  describe("Input", () => {
    const inputNode = itemNode.querySelector('input[type="radio"]')

    it("has zoombie value", () => {
      expect(inputNode.value).toEqual("zoombie")
    })

    it("has lala name", () => {
      expect(inputNode.name).toEqual("lala")
    })

    it("is checked", () => {
      expect(inputNode.checked).toBeTruthy()
    })
  })
})