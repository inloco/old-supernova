jest.unmock("../factories/components/header-factory")

import HeaderFactory from "../factories/components/header-factory"

describe("Header", () => {
  const factory = new HeaderFactory
  const node = factory.getNode()

  it("is a header", () => {
    expect(node.tagName).toEqual("HEADER")
  })

  it("has header class", () => {
    expect(node.classList.contains("sn-layout__header")).toBeTruthy()
  })

  it("has 'Some section' cotent", () => {
    const row = node.querySelector(".sn-layout__title")

    expect(row.textContent).toEqual("Some section")
  })

  it("has 'Second section' cotent", () => {
    const row = node.querySelector(".sn-layout__subtitle")

    expect(row.textContent).toEqual("Second section")
  })

  it("has drawer button", () => {
    const row = node.querySelector(".sn-layout__drawer-button")

    expect(node.querySelector("i")
               .classList
               .contains("material-icons")).toBeTruthy()
  })
})
