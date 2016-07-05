jest.unmock("../../factories/components/dropdown-factory")

import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown Item", () => {
  const factory = new DropdownFactory
  const node = factory.getNode().querySelector("li > a")
  const specificNode = factory.getNode().querySelector("li")

  it("has a href", () => {
    expect(node.getAttribute("href")).toEqual("#a")
  })

  it("has a label", () => {
    expect(node.textContent).toEqual("Link A")
  })

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("dropdown_item_id")
  })

  it("has data dropdown select", () => {
    expect(specificNode.getAttribute("data-dropdown-select")).toEqual("Today")
  })

  it("has data dropdown select text", () => {
    expect(specificNode.getAttribute("data-dropdown-select-text")).toEqual("Hoje")
  })
})
