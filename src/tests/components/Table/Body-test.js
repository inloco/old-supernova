jest.unmock("../../factories/components/table-factory")

import TableFactory from "../../factories/components/table-factory"

describe("Table Body", () => {
  const factory = new TableFactory  
  const node = factory.getNode().querySelector("tbody")
  
  it("is a tbody", () => {   
    expect(node.tagName).toEqual("TBODY")
  })
  
  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})