jest.unmock("../../factories/components/header-factory")

import HeaderFactory from "../../factories/components/header-factory"

describe("Header", () => {
  const factory = new HeaderFactory
  const node = factory.getNode()

  it("is a header", () => {
    expect(node.tagName).toEqual("HEADER")
  })
  
  it("has 3 children", () => {
    expect(node.querySelectorAll("a").length).toEqual(3)
  })
  
  it("has 2 arrows", () => {
    expect(node.querySelectorAll(".icon-arrow-right").length).toEqual(2)
  })
})
