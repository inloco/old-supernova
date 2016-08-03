jest.unmock("../factories/components/textArea-factory")

import TextAreaFactory from "../factories/components/textArea-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import TextArea from "../../src/components/TextArea"

describe("TextArea", () => {
  const factory = new TextAreaFactory
  const node = factory.getNode().querySelector("textarea")

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("targeting_geo_locations")
  })

  it("has name", () => {
    expect(node.getAttribute("name")).toEqual("targeting[geo_locations]")
  })

  it("has rows", () => {
    expect(node.getAttribute("rows")).toEqual("5")
  })

  it("has tabindex", () => {
    expect(node.tabIndex).toEqual(3)
  })
})
