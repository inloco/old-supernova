jest.unmock("../../../../factories/components/table-factory")
jest.unmock("../../../../../src/helpers/table")

import TableFactory from "../../../../factories/components/table-factory"

describe("Cell Data Title", () => {
  const factory = new TableFactory
  const node = factory.getNode().querySelector("td")

  it("is a td", () => {
    expect(node.tagName).toEqual("TD")
  })

  it("has a link with href", () => {
    const link = node.querySelector("a")

    expect(link.getAttribute("href")).toEqual("#1")
  })

  it("has a link with Id text", () => {
    const link = node.querySelector("a")

    expect(link.textContent).toEqual("1")
  })
})
