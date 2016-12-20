jest.unmock("../../../factories/components/Steps/arrow-factory")

import StepsFactory from "../../../factories/components/Steps/arrow-factory"

describe("Steps Arrow Item", () => {
  const factory = new StepsFactory
  const node = factory.getNode().querySelector("div")
  const activeNode = factory.getNode().querySelectorAll("div")[1]

  it("has steps item class", () => {
    expect(node.getAttribute("class").includes("sn-steps__item")).toBeTruthy
  })

  it("has icon with correct number", () => {
    var icon = node.querySelector("i")

    expect(icon.textContent).toEqual("done")
  })

  it("has label", () => {
    expect(node.textContent.includes("Informações Gerais")).toBeTruthy()
  })

  it("is done", () => {
    expect(node.getAttribute("class").includes("is-done")).toBeTruthy
  })

  it("active node has active class", () => {
    expect(activeNode.getAttribute("class").includes("is-active")).toBeTruthy
  })
})
