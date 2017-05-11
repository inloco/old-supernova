jest.unmock("../factories/components/label-factory")

import LabelFactory from "../factories/components/label-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-dom/test-utils"
import Label from "../../src/components/Label"

describe("Label", () => {
  const factory = new LabelFactory
  const node = factory.getNode()

  it("has for", () => {
    expect(node.htmlFor).toEqual("targeting_geo_locations")
  })

  it("has value", () => {
    expect(node.textContent).toEqual("Locations")
  })
})
