jest.unmock("../../factories/components/dropdown-factory")

import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown Item", () => {
  const factory = new DropdownFactory
  const node = factory.getNode().querySelector("li > a")

  it("has a href", () => {
    expect(node.getAttribute("href")).toEqual("#a")
  })

  it("has a label", () => {
    expect(node.textContent).toEqual("Link A")
  })

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("dropdown_item_id")
  })
})
