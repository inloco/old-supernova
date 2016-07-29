jest.unmock("../../factories/components/card-list-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import CardListFactory from "../../factories/components/card-list-factory"

describe("Card", () => {
  const factory = new CardListFactory
  const listNode = factory.getNode()

  it("has card list class", () => {
    expect(listNode.classList.contains("sn-card__list")).toBeTruthy()
  })

  it("has 3 cards items", () => {
    expect(listNode.children.length).toEqual(3)
  })
})