jest.unmock("../../factories/components/paginate-factory")

import PaginateFactory from "../../factories/components/paginate-factory"

describe("Paginate", () => {
  const factory = new PaginateFactory
  const node = factory.getNode()

  it("has 2 children", () => {
    console.log(node.outerHTML)
    expect(node.querySelectorAll("li").length).toEqual(2)
  })
})
