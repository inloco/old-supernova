jest.unmock("../../../factories/components/table-factory")
jest.unmock("../../../../src/helpers/table")

import TableFactory from "../../../factories/components/table-factory"

describe("Cell Head", () => {
  const factory = new TableFactory
  const node = factory.getNode().querySelector("th")

  it("is a th", () => {
    expect(node.tagName).toEqual("TH")
  })

  it("has text Id", () => {
    expect(node.textContent).toEqual("Id")
  })

  it("has class type", () => {
    expect(node.getAttribute("class").includes('number-col')).toBeTruthy
  })
})
