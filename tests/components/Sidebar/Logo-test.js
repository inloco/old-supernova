jest.unmock("../../factories/components/sidebar-factory")

import SidebarFactory from "../../factories/components/sidebar-factory"

describe("Sidebar Logo", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has logo", () => {
    expect(node.getAttribute("class")
               .includes("brand")).toBeTruthy

    expect(node.querySelector("a")
               .getAttribute("href")).toEqual("/en")

    expect(node.querySelector("img")
               .getAttribute("src")).toEqual("http://localhost:4000/assets/v2/1_0x/brand-inlocomedia.png")

    expect(node.querySelector("img")
               .getAttribute("data-image")).toEqual("brand-inlocomedia.png")
  })
})
