jest.unmock("../../factories/components/wizard-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import WizardFactory from "../../factories/components/wizard-factory"

describe("Wizard Step", () => {
  const factory = new WizardFactory
  const stepNode = factory.getNode().querySelector(".sn-wizard-step")

  it("exists", () => {
    expect(stepNode).not.toBeNull()
  })

  it("has 'Baar' like content", () => {
    expect(stepNode.textContent).toEqual("Baar")
  })
})