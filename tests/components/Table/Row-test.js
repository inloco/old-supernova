jest.unmock("../../factories/components/table-factory")

import TableFactory from "../../factories/components/table-factory"

describe("Table Row", () => {
  const factory = new TableFactory  
  const node = factory.getNode().querySelector("tr")
  
  it("is a tr", () => {
    expect(node.tagName).toEqual("TR")
  })
  
  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})