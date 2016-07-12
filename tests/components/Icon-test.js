jest.unmock("../factories/components/icon-factory")

import IconFactory from "../factories/components/icon-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Icon from "../../src/components/Icon"

describe("Icon", () => {
  const factory = new IconFactory
  const node = factory.getNode()

  it("has size", () => {
    expect(node.getAttribute("class").includes("icon-24")).toBeTruthy
  })

  it("has name", () => {
    expect(node.getAttribute("class").includes("icon-number-2")).toBeTruthy
  })
})
