jest.unmock("../../factories/components/form-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import FormFactory from "../../factories/components/form-factory"

describe("Checkbox", () => {
  const factory = new FormFactory
  const node = factory.getNode().querySelector("#checkbox-factory")

  it("has checkbox class", () => {
    expect(node.classList.contains("sn-checkbox")).toBeTruthy()
  })

  it("has checkbox input", () => {
    const input = node.querySelector("input")

    expect(input.type).toEqual("checkbox")
  })

  it("has checkbox icon", () => {
    const icon = node.querySelector(".sn-input__icon")

    expect(icon).not.toBeNull()
  })
})