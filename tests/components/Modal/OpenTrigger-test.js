jest.unmock("../../factories/components/Modal/openTrigger-factory")

import ModalOpenTriggerFactory from "../../factories/components/Modal/openTrigger-factory"

describe("Open trigger", () => {
  const factory = new ModalOpenTriggerFactory
  const node = factory.getNode()

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("id")
  })

  it("has data-modal-id", () => {
    expect(node.getAttribute("data-modal-id")).toEqual("advAdrressModal")
  })

  it("has children", () => {
    expect(node.children.length).toEqual(1)
  })
})
