jest.unmock("../../factories/components/radioButton-factory")

import RadioButtonFactory from "../../factories/components/radioButton-factory"

describe("LabelRadioButton", () => {
  const factory = new RadioButtonFactory
  const node = factory.getNode()

  it("has name", () => {
    expect(node.querySelector("input").getAttribute("name")).toEqual("name")
  })

  it("has label", () => {
    expect(node.querySelector("label").textContent).toEqual("label")
  })
})
