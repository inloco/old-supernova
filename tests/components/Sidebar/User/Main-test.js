jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar User", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()
  const dropdownNode = node.querySelector(".dropdown > ul > li > a")
  const impersonateNode = node.querySelector(".user-info > div > a")

  it("has avatar", () => {
    expect(node.querySelectorAll("img")[1]
               .getAttribute("src")).toEqual("http://localhost:4000/assets/v2/1_0x/inloco-avatar.jpg")
  })

  it("has user name", () => {
    expect(node.querySelector(".user-name").textContent)
               .toEqual("Publisher2")
  })

  it("has user type", () => {
    expect(node.querySelector(".user-type").textContent)
               .toEqual("publisher@inlocomedia.com")
  })

  it("has login", () => {
    expect(node.querySelector(".user-login > li > a").textContent)
               .toEqual("View my account")
  })

  it("has login href", () => {
    expect(node.querySelector(".user-login > li > a")
               .getAttribute("href"))
               .toEqual("/en/publishers/registrations")
  })

  it("has logout", () => {
    expect(node.querySelectorAll(".user-login > li")[1]
               .querySelector("a").textContent)
               .toEqual("Logout")
  })

  it("has logout href", () => {
    expect(node.querySelectorAll(".user-login > li")[1]
               .querySelector("a")
               .getAttribute("href"))
               .toEqual("#sair")
  })

  it("has current dropdown", () => {
    const dropdown = node.querySelector(".sn-dropdown")

    expect(dropdown).not.toBeNull()
  })

  it("has dropdown item with 'Publisher' content", () => {
    const item = node.querySelector(".sn-dropdown a")

    expect(item.textContent).toEqual("Publisher")
  })

  it("has dropdown item with href", () => {
    const item = node.querySelector(".sn-dropdown a")

    expect(item.href).toEqual("/en/publishers")
  })

  it("has impersonate label", () => {
    expect(impersonateNode.textContent)
               .toEqual("Retorne para x@inlocomedia.com")
  })

  it("has impersonate href", () => {
    expect(impersonateNode.getAttribute("href"))
               .toEqual("/en/applications")
  })
})
