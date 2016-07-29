jest.unmock("../../factories/components/paginate-factory")

import PaginateFactory from "../../factories/components/paginate-factory"

describe("Paginate", () => {
  const factory = new PaginateFactory
  const node = factory.getNode().querySelector("a")
  const nodeSpan = node.querySelector("span")

  it("has href", () => {
    console.log(node.outerHTML)

    expect(node.getAttribute("href")).toEqual("publisher/index")
  })

  it("has label", () => {
    expect(nodeSpan.textContent).toEqual("1")
  })

  it("has icon", () => {
    expect(nodeSpan.getAttribute("class").includes("paginate-number")).toBeTruthy()
  })

  it("is active", () => {
    expect(nodeSpan.getAttribute("class").includes("active")).toBeTruthy()
  })
})
