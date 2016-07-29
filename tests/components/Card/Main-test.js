jest.unmock("../../factories/components/card-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import CardFactory from "../../factories/components/card-factory"

describe("Card", () => {
  const factory = new CardFactory
  const cardNode = factory.getNode()

  it("has card class", () => {
    expect(cardNode.classList.contains("sn-card"))
  })

  it("has children", () => {
    expect(cardNode.children.length).toBeGreaterThan(0)
  })
})