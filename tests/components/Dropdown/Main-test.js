jest.unmock("../../factories/components/dropdown-factory")

import TestUtils from "react-addons-test-utils"
import DropdownFactory from "../../factories/components/dropdown-factory"

describe("Dropdown", () => {
  const factory = new DropdownFactory
  const node = factory.getNode()

  it("has the dropdown class", () => {
    expect(node.classList.contains("sn-dropdown")).toBeTruthy()
  })

  it("has a button label equal 'dropdown'", () => {
    const button = node.querySelector(".sn-dropdown__button")

    expect(button.textContent).toEqual("Dropdown")
  })

  it("has a button with 'button' type", () => {
    const button = node.querySelector(".sn-dropdown__button")

    expect(button.type).toEqual("button")
  })

  it("has a list with 3 items", () => {
    const items = node.querySelectorAll(".sn-dropdown__results li")

    expect(items.length).toEqual(3)
  })

  it("has a not visible list", () => {
    const list = node.querySelector(".sn-dropdown__results")

    expect(list.style.display).toEqual("none")
  })

  it("has box layout", () => {
    expect(node.classList.contains("sn-dropdown--box")).toBeTruthy()
  })

  describe("when clicks in dropdown button", () => {
    const button = node.querySelector(".sn-dropdown__button")
    const list =   node.querySelector(".sn-dropdown__results")

    it("shows the list", () => {
      TestUtils.Simulate.click(button)

      expect(list.style.display).toEqual("block")
    })

    describe("when clicks again in the button", () => {
      it("hiddens the list", () => {
        TestUtils.Simulate.click(button)

        expect(list.style.display).toEqual("none")
      })
    })

    describe("when clicks in an item of list", () => {
      it("changes label", () => {
        const item = list.querySelector("li")
        const label = node.querySelector("button")

        TestUtils.Simulate.click(button)
        TestUtils.Simulate.click(item)

        expect(label.textContent).toEqual("Dropdown result 1")
      })
    })
  })
})
