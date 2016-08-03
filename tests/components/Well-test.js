jest.unmock("../factories/components/well-factory")

import WellFactory from "../factories/components/well-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Well from "../../src/components/Well"

describe("Well", () => {
  const factory = new WellFactory
  const node = factory.getNode()

  it("has well class", () => {
    expect(node.classList.contains("sn-well")).toBeTruthy()
  })

  it("has content 'I am a Well!'", () => {
    expect(node.textContent).toEqual("I am a Well!")
  })
})
