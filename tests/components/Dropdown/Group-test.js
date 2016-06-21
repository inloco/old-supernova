jest.unmock("../../factories/components/dropdown-factory")

import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown Group", () => {
  const factory = new DropdownFactory
  const node = factory.getNode()

  it("has a subheader class", () => {
    expect(node.getAttribute("class").includes("subheader")).toBeTruthy()
  })

  it("has 2 children", () => {
    expect(node.querySelectorAll(".dropdown").length).toEqual(2)
  })
})
