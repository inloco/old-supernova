jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar Footer Link", () => {
  const factory = new SidebarFactory
  const node = factory.getNode().querySelector(".nav-footer p:last-child span")

  describe("has link", () => {
    const link = node.querySelector("a")
    
    it("has href", () => {
      expect(link.getAttribute("href")).toEqual("www.google.com.br")
    })
    
    it("has label", () => {
      expect(link.innerHTML).toEqual("Privacidade")
    })
  })

  it("has divider", () => {
    expect(node.querySelectorAll(".divider").length).toEqual(1)
  })
})
