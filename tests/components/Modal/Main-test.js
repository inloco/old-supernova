jest.unmock("../../factories/components/modal-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import ModalFactory from "../../factories/components/modal-factory"

describe("Modal", () => {
  const factory = new ModalFactory

  let component, node

  beforeEach(() => {
    component = factory.render()
    node = factory.getNode()
  })

  it("has modal dialog with large size class", () => {
    const modalDialogNode = node.querySelector(".modal-dialog")

    expect(modalDialogNode.classList.contains("modal-lg")).toBeTruthy()
  })

  describe("when it is close", () => {
    it("has not modal-open class in body", () => {
      const bodyNode = document.querySelector("body")

      expect(bodyNode.classList.contains("modal-open")).toBeFalsy()
    })

    it("shows not the backdrop", () => {
      const backdropNode = node.querySelector(".modal-backdrop")

      expect(backdropNode).toBeNull();
    })
  })

  describe("when it is show", () => {
    beforeEach(() => {
      component.open()
      node = ReactDOM.findDOMNode(component)
    })

    it("has modal-open class in body", () => {
      const bodyNode = document.querySelector("body")

      expect(bodyNode.classList.contains("modal-open")).toBeTruthy()
    })

    it("shows the backdrop", () => {
      const backdropNode = node.querySelector(".modal-backdrop")

      expect(backdropNode).not.toBeNull();
    })
  })
})