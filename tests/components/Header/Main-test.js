jest.unmock("../../factories/components/header-factory")

import HeaderFactory from "../../factories/components/header-factory"

describe("Header", () => {
  const factory = new HeaderFactory
  const node = factory.getNode()

  it("is a header", () => {
    expect(node.tagName).toEqual("HEADER")
  })

  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})
