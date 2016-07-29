jest.unmock("../../factories/components/card-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import CardFactory from "../../factories/components/card-factory"

describe("Row", () => {
  const factory = new CardFactory
  const rowNode = factory.getNode().querySelector(".sn-card__row")

  it("exists", () => {
    expect(rowNode).not.toBeNull()
  })

  it("has text content", () => {
    expect(rowNode.textContent).not.toBeNull()
  })

  it("has title className", () => {
    expect(rowNode.classList.contains("sn-card__row--title")).toBeTruthy()
  })
})