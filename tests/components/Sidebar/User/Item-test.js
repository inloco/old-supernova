jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar User item", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has credits", () => {
    expect(node.querySelector(".user-credits-cash > p").textContent)
               .toEqual("Credits")
  })

  it("has currency", () => {
    expect(node.querySelector(".user-credits-cash > .user-currency").textContent)
               .toEqual("R$")
  })

  it("has cash", () => {
    expect(node.querySelector(".user-credits-cash > .user-cash").textContent)
               .toEqual("0.00")
  })
})