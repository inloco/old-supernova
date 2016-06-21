jest.unmock("../../factories/components/sidebar-factory")

import SidebarFactory from "../../factories/components/sidebar-factory"

describe("Sidebar Menu", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has sidebar class", () => {
    expect(node.getAttribute("class").includes("side")).toBeTruthy
  })

  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})
