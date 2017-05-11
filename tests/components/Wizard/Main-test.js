jest.unmock("../../factories/components/wizard-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-dom/test-utils"
import WizardFactory from "../../factories/components/wizard-factory"
import { wizardHasContent } from "../../utils/wizard"

describe("Wizard", () => {


  let factory, wizardNode, onChangeMock

  beforeEach(() => {
    onChangeMock = jest.fn()
    factory      = new WizardFactory
    wizardNode   = factory.getNode({ onChange: onChangeMock })
  })

  it("shows only 1 step by time", () => {
    const stepsNode = wizardNode.querySelectorAll(".sn-wizard-step")

    expect(stepsNode.length).toEqual(1)
  })

  it("shows the second step with content 'Baar'", () => {
    wizardHasContent("Baar", wizardNode)
  })

  describe("when click in the next button", () => {
    let nextBtnNode

    beforeEach(() => {
      nextBtnNode = wizardNode.querySelector("#next-button")

      TestUtils.Simulate.click(nextBtnNode)
    })

    it("shows the third tab with content 'Some'", () => {
      const stepNode = wizardNode.querySelector(".sn-wizard-step")

      expect(stepNode.textContent).toEqual("Some")
    })

    it("stops when it is the last step", () => {
      TestUtils.Simulate.click(nextBtnNode)

      const stepNode = wizardNode.querySelector(".sn-wizard-step")

      expect(stepNode.textContent).toEqual("Some")
    })

    it("calls onChange function", () => {
      expect(onChangeMock.mock.calls.length).toEqual(1)
    })
  })

  describe("when click in the previous button", () => {
    let previousBtnNode

    beforeEach(() => {
      previousBtnNode = wizardNode.querySelector("#previous-button")

      TestUtils.Simulate.click(previousBtnNode)
    })

    it("shows the first tab with content 'Foo'", () => {
      const stepNode = wizardNode.querySelector(".sn-wizard-step")

      expect(stepNode.textContent).toEqual("Foo")
    })

    it("stops when it is the first step", () => {
      TestUtils.Simulate.click(previousBtnNode)

      const stepNode = wizardNode.querySelector(".sn-wizard-step")

      expect(stepNode.textContent).toEqual("Foo")
    })

    it("calls onChange function", () => {
      expect(onChangeMock.mock.calls.length).toEqual(1)
    })
  })
})
