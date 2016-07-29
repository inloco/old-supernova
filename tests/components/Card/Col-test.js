jest.unmock("../../factories/components/card-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import CardFactory from "../../factories/components/card-factory"

describe("Col", () => {
  const factory = new CardFactory
  const colNode = factory.getNode().querySelector(".sn-card__col")

  it("exists", () => {
    expect(colNode).not.toBeNull()
  })

  it("has correct size className", () => {
    expect(colNode.classList.contains("sn-card__col--2")).toBeTruthy()
  })

  it("has children", () => {
    expect(colNode.children.length).toBeGreaterThan(0)
  })
})