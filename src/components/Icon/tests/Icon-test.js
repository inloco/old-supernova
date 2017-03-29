jest.unmock("../factories/components/icon-factory")

import IconFactory from "../factories/components/icon-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Icon from "../../src/components/Icon"

describe("Icon", () => {
  const factory = new IconFactory
  const node = factory.getNode()

  it("has icon className", () => {
    expect(node.classList.contains("material-icons")).toBeTruthy()
  })

  it("has icon className", () => {
    expect(node.classList.contains("material-icons")).toBeTruthy()
  })

  it("has content", () => {
    expect(node.textContent).not.toBeNull()
  })
})
