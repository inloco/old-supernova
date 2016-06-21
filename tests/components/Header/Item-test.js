jest.unmock("../../factories/components/header-factory")

import HeaderFactory from "../../factories/components/header-factory"

describe("Header Item", () => {
  const factory = new HeaderFactory
  const node = factory.getNode()
  const children = node.querySelectorAll("a")

  it("has 3 children", () => {
    expect(children.length).toEqual(3)
  })

  it("has href", () => {
    expect(children[1].getAttribute("href")).toEqual("#B")
  })

  it("has label", () => {
    expect(children[1].textContent).toEqual("Music")
  })
})
