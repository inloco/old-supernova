jest.unmock("../../../factories/components/Steps/bubble-factory")

import StepsFactory from "../../../factories/components/Steps/bubble-factory"

describe("Steps Bubble Item", () => {
  const factory = new StepsFactory
  const stepsNode = factory.getNode().querySelectorAll("li")

  describe("Firt step", () => {
    const firstStep = stepsNode[0]

    it("has 'Item Completo' content", () => {
      expect(firstStep.textContent).toEqual("Item Completo")
    })

    it("is done", () => {
      expect(firstStep.classList.contains("is-done")).toBeTruthy()
    })
  })

  describe("Third step", () => {
    let thirdStep

    beforeEach(() => {
      thirdStep = stepsNode[2]
    })

    it("is active", () => {
      expect(thirdStep.classList.contains("is-active")).toBeTruthy()
    })
  })

  describe("Fourth step", () => {
    let fourthStep

    beforeEach(() => {
      fourthStep = stepsNode[3]
    })

    it("is to do", () => {
      expect(fourthStep.className).toEqual("")
    })
  })
})