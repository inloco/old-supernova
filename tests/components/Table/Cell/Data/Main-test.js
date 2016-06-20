jest.unmock("../../../../factories/components/table-factory")

import TableFactory from "../../../../factories/components/table-factory"

describe("Cell Data", () => {
  const factory = new TableFactory  
  const node = factory.getNode().querySelector("td")
  
  it("is a td", () => {   
    expect(node.tagName).toEqual("TD")
  })
  
  it("has Id text", () => {
    expect(node.textContent).toEqual("1")
  })
})