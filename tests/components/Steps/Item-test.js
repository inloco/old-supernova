jest.unmock("../../factories/components/steps-factory")

import StepsFactory from "../../factories/components/steps-factory"

describe("StepItem", () => {
  const factory = new StepsFactory
  const node = factory.getNode().querySelector("div")
  const activeNode = factory.getNode().querySelectorAll("div")[1]

  it("has steps item class", () => {
    expect(node.getAttribute("class").includes("sn-steps__item")).toBeTruthy
  })

  it("has icon with correct number", () => {
    var icon = node.querySelector("i")

    expect(icon.textContent).toEqual("1")
  })

  it("has label", () => {
    expect(node.textContent).toEqual("1Informações Gerais")
  })

  it("is done", () => {
    expect(node.getAttribute("class").includes("is-done")).toBeTruthy
  })

  it("active node has active class", () => {
    expect(activeNode.getAttribute("class").includes("is-active")).toBeTruthy
  })
})
