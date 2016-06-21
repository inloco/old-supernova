jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar Footer", () => {
  const factory = new SidebarFactory
  const node = factory.getNode().querySelector(".nav-footer")

  it("has company name with current year in copyright", () => {
    const copyright = node.querySelector(".copyright")
    const currentYear = new Date().getFullYear()
    
    expect(copyright.textContent).toEqual("In Loco Media © " + currentYear)
  })

  it("has children", () => {
    const childrenContainer = node.querySelectorAll("p")[1]
    
    expect(childrenContainer.children.length).toBeGreaterThan(0)
  })
})
