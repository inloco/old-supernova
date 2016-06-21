jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar Menu", () => {
  const factory = new SidebarFactory
  const node = factory.getNode().querySelector("ul")
  
  it("has children", () => {
    expect(node.children.length).toBeGreaterThan(0)
  })
})
