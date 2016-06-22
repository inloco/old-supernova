jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar Item", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has one item with two children", () => {
    expect(node.querySelector(".main-menu")
               .querySelector("ul")
               .children
               .length).toEqual(2)
  })

  it("has four items", () => {
    expect(node.querySelector(".main-menu")
               .querySelectorAll("li")
               .length).toEqual(4)
  })

  it("has href", () => {
    expect(node.querySelector(".main-menu")
               .querySelectorAll("li")[3]
               .querySelector("a")
               .getAttribute("href")).toEqual("#B")
  })

  it("has icon", () => {
    expect(node.querySelector(".main-menu")
               .querySelectorAll("li")[3]
               .getAttribute("class")
               .includes("icon-nav-cash")).toBeTruthy
  })

  it("has label", () => {
    expect(node.querySelector(".main-menu")
               .querySelectorAll("li")[3]
               .textContent).toEqual("Earnings")
  })
})
