jest.unmock("../../factories/components/table-factory")

import TableFactory from "../../factories/components/table-factory"

describe("Table Head", () => {
  const factory = new TableFactory
  const node = factory.getNode().querySelector('thead')

  it("is a thead", () => {
    expect(node.tagName).toEqual("THEAD")
  })

  it("has an one row", () => {
    const rows = node.querySelectorAll('tr')

    expect(rows.length).toEqual(1);
  })

  it("has 2 headers", () => {
    const headers = node.querySelectorAll('th')

    expect(headers.length).toEqual(2)
  })
})