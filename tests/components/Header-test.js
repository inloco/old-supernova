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
    const row = node.querySelector(".sn-layout__header-row")

    expect(row.textContent).toEqual("Some section")
  })
})
