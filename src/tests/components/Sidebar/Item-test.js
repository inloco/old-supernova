jest.unmock("../../factories/components/sidebar-factory")
jest.unmock("../../../helpers/sidebar")

import SidebarFactory from "../../factories/components/sidebar-factory"

describe("Sidebar Item", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has one item with two children", () => {
    expect(node.querySelector("ul")
               .querySelector("ul")
               .children
               .length).toEqual(2)
  })

  it("has four items", () => {
    expect(node.querySelectorAll("li")
               .length).toEqual(4)
  })

  it("has href", () => {
    console.log("a: ", node.querySelectorAll("li")[3].innerHTML)
    expect(node.querySelectorAll("li")[3]
               .querySelector("a")
               .getAttribute("href")).toEqual("#B")
  })

  it("has icon", () => {
    expect(node.querySelectorAll("li")[3]
               .getAttribute("class")
               .includes("icon-nav-cash")).toBeTruthy
  })

  it("has label", () => {
    expect(node.querySelectorAll("li")[3]
               .textContent).toEqual("Earnings")
  })
})
