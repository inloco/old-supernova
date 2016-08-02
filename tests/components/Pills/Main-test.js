jest.unmock("../../factories/components/pills-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import PillsFactory from "../../factories/components/pills-factory"

describe("Pills", () => {
  const factory = new PillsFactory
  const pillsNode = factory.getNode()

  it("has pills className", () => {
    expect(pillsNode.classList.contains("sn-pills")).toBeTruthy()
  })

  it("has 3 pill items", () => {
    const items = pillsNode.querySelectorAll(".sn-pills__label")

    expect(items.length).toEqual(3)
  })

  it("has the first pill input checked", () => {
    const firstInput = pillsNode.querySelector("input")

    expect(firstInput.checked).toBeTruthy()
  })

  it("has pills inputs with the same name", () => {
    const inputs = pillsNode.querySelectorAll("input")

    for(let input of inputs) {
      expect(input.name).toEqual("lala")
    }
  })
})