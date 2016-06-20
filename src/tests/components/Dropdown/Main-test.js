jest.unmock("../../factories/components/dropdown-factory")

import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown", () => {
  const factory = new DropdownFactory  
  const node = factory.getNode()
  
  it("has a dropdown class", () => {   
    expect(node.getAttribute("class").includes("dropdown")).toBeTruthy()
  })
  
  it("has a dropdown right size class", () => {
    expect(node.querySelectorAll(".dropdown-menu-right").length).toEqual(1)
  })
  
  it("shows 3 links", () => {
    expect(node.querySelector("ul").children.length).toEqual(3)
  })
})