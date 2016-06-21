jest.unmock("../../factories/components/dropdown-factory")

import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown", () => {
  const factory = new DropdownFactory
  const node = factory.getNode()

  it("has a dropdown class", () => {
    expect(node.querySelectorAll("div")[4]
               .getAttribute("class")
               .includes("dropdown")).toBeTruthy()
  })

  it("has a dropdown right size class", () => {
    expect(node.querySelectorAll(".dropdown-menu-right").length).toEqual(2)
  })

  it("shows 3 links", () => {
    expect(node.querySelector("ul").children.length).toEqual(3)
  })

  it("has label", () => {
    expect(node.querySelector("p").textContent).toEqual("Period:")
  })

  it("has secondary label", () => {
    expect(node.querySelectorAll("span")[1].textContent).toEqual(" Current month ")
  })

  it("has secondary icon", () => {
    expect(node.querySelector("span")
               .getAttribute("class")
               .includes("icon-time")).toBeTruthy()
  })
})
