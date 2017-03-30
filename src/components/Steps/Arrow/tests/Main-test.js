jest.unmock("../../../factories/components/Steps/arrow-factory")

import StepsFactory from "../../../factories/components/Steps/arrow-factory"

describe("Steps Arrow", () => {
  const factory = new StepsFactory
  const node = factory.getNode()

  it("has steps class", () => {
    expect(node.getAttribute("class").includes("sn-steps")).toBeTruthy
  })

  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })

  it("is raised", () => {
    expect(node.getAttribute("class").includes("sn-steps--raised")).toBeTruthy
  })
})
