jest.unmock("../../../factories/components/sidebar-factory")

import SidebarFactory from "../../../factories/components/sidebar-factory"

describe("Sidebar User", () => {
  const factory = new SidebarFactory
  const node = factory.getNode()

  it("has avatar", () => {
    expect(node.querySelectorAll("img")[1]
               .getAttribute("src")).toEqual("http://localhost:4000/assets/v2/1_0x/inloco-avatar.jpg")

    expect(node.querySelectorAll("img")[1]
               .getAttribute("data-image")).toEqual("inloco-avatar.jpg")
  })

  it("has user info", () => {
    expect(node.querySelector(".user-name").textContent)
               .toEqual("Publisher2")

    expect(node.querySelector(".user-type").textContent)
               .toEqual("publisher@inlocomedia.com")

    expect(node.querySelector(".user-login > li > a").textContent)
               .toEqual("View my account")

    expect(node.querySelector(".user-login > li > a")
               .getAttribute("href"))
               .toEqual("/en/publishers/registrations")

    expect(node.querySelectorAll(".user-login > li")[1]
               .querySelector("a").textContent)
               .toEqual("Logout")

    expect(node.querySelectorAll(".user-login > li")[1]
               .querySelector("a")
               .getAttribute("href"))
               .toEqual("#sair")
  })

  it("has dropdown", () => {
    expect(node.querySelector(".dropdown > a > span").textContent)
               .toEqual(" Advertiser ")

    expect(node.querySelector(".dropdown > ul > li > a").textContent)
               .toEqual("Publisher")

    expect(node.querySelector(".dropdown > ul > li > a").getAttribute("href"))
               .toEqual("/en/publishers")
  })
})
