jest.unmock("../../factories/components/table-factory")

import TableFactory from "../../factories/components/table-factory"

describe("Table", () => {
  const factory = new TableFactory  
  const node = factory.getNode()
  
  it("is a table", () => {   
    expect(node.tagName).toEqual("TABLE")
  })
  
  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})