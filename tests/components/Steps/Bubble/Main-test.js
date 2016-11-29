jest.unmock("../../../factories/components/Steps/bubble-factory")

import StepsFactory from "../../../factories/components/Steps/bubble-factory"

describe("Steps Bubble", () => {
  const factory = new StepsFactory
  const node = factory.getNode()

  it("has steps class", () => {
    expect(node.getAttribute("class").includes("sn-steps")).toBeTruthy()
  })

  it("has bubble steps class", () => {
    expect(node.getAttribute("class").includes("sn-steps__bubble")).toBeTruthy()
  })

  it("has a bubble list", () => {
    const list = node.querySelector("ul.sn-steps__bubble-list")

    expect(list).not.toBeNull()
  })

  it("has 4 steps", () => {
    const steps = node.querySelectorAll("li")

    expect(steps.length).toEqual(4)
  })

  it("has two done steps", () => {
    const doneSteps = node.querySelectorAll(".is-done")

    expect(doneSteps.length).toEqual(2)
  })

  it("has one active step", () => {
    const activeSteps = node.querySelectorAll(".is-active")

    expect(activeSteps.length).toEqual(1)
  })

  it("has one to do step", () => {
    const doingSteps = node.querySelectorAll('li[class=""]')

    expect(doingSteps.length).toEqual(1)
  })
})