jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar User", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has avatar", () => {
    expect(node.querySelectorAll("img")[1]
               .getAttribute("src")).toEqual("http://localhost:4000/assets/v2/1_0x/inloco-avatar.jpg")
  })

  it("has avatar name", () => {
    expect(node.querySelectorAll("img")[1]
               .getAttribute("data-image")).toEqual("inloco-avatar.jpg")
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
    expect(node.querySelector(".dropdown > a > span").textContent)
               .toEqual(" Advertiser ")
  })

  it("has second dropdown", () => {
    expect(node.querySelector(".dropdown > ul > li > a").textContent)
               .toEqual("Publisher")
  })

  it("has dropdown href", () => {
    expect(node.querySelector(".dropdown > ul > li > a").getAttribute("href"))
               .toEqual("/en/publishers")
  })
})
