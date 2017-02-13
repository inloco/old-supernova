jest.unmock("../../factories/components/form-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import FormFactory from "../../factories/components/form-factory"

describe("Form Group", () => {
  const factory = new FormFactory
  const node = factory.getNode().querySelector("#form-group-factory")

  it("has group class", () => {
    expect(node.classList.contains("sn-form-group")).toBeTruthy()
  })

  it("has an label with 'Form Group Label' content", () => {
    const label = node.querySelector(".sn-form-group__label")

    expect(label.textContent).toEqual("Form Group Label")
  })

  it("has 2 checkboxes", () => {
    const checkboxes = node.querySelectorAll(".sn-checkbox")

    expect(checkboxes.length).toEqual(2)
  })

  it("has 2 inputs with the foo name", () => {
    const inputs = node.querySelectorAll(".sn-checkbox input")

    inputs.forEach(input => {
      expect(input.name).toEqual("foo")
    })
  })
})