jest.unmock("../../factories/components/Modal/closeTrigger-factory")

import ModalCloseTriggerFactory from "../../factories/components/Modal/closeTrigger-factory"

describe("Close trigger", () => {
  const factory = new ModalCloseTriggerFactory
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
