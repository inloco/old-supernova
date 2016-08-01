jest.unmock("../../factories/components/radioButton-factory")

import RadioButtonFactory from "../../factories/components/radioButton-factory"

describe("RadioButton", () => {
  const factory = new RadioButtonFactory
  const node = factory.getNode()

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("id")
  })

  it("has radio class", () => {
    expect(node.getAttribute("class").includes("radio")).toBeTruthy
  })

  it("is checked", () => {
    const inputNode = node.querySelector("input")

    expect(inputNode.checked).toBeTruthy()
  })
})
