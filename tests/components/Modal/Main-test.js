jest.unmock("../../factories/components/Modal/modal-factory")

import ModalFactory from "../../factories/components/Modal/modal-factory"

describe("Modal", () => {
  const factory = new ModalFactory
  const node = factory.getNode().querySelector("div")

  it("has id", () => {
    expect(node.getAttribute("id")).toEqual("advAdrressModal")
  })

  it("has size", () => {
    expect(node.getAttribute("class").includes("modal-lg")).toBeTruthy
  })

  it("has title", () => {
    expect(node.querySelector(".modal-title").textContent).toEqual("Coordenadas")
  })
})
