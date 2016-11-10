import DropdownFactory from "../../factories/components/dropdown-factory"
import { mount } from "enzyme"

describe("Dropdown", () => {
  const wrapper = mount(DropdownFactory)

  it("has the dropdown class", () => {
    expect(wrapper.find(".sn-dropdown").length).toEqual(1)
  })

  it("has a button label equal 'dropdown'", () => {
    const button = wrapper.find(".sn-dropdown__button")

    expect(button.text()).toEqual("Dropdown")
  })

  it("has a button with 'button' type", () => {
    const button = wrapper.find(".sn-dropdown__button")

    expect(button.props().type).toEqual("button")
  })

  it("has a list with 3 items", () => {
    const items = wrapper.find(".sn-dropdown__results li")

    expect(items.length).toEqual(3)
  })

  it("has a not visible list", () => {
    const list = wrapper.find(".sn-dropdown__results")

    expect(list.props().style.display).toEqual("none")
  })

  it("has box layout", () => {
    expect(wrapper.find(".sn-dropdown--box").length).toEqual(1)
  })

  describe("when clicks in dropdown button", () => {
    const button = wrapper.find(".sn-dropdown__button")
    const list =   wrapper.find(".sn-dropdown__results")

    it("shows the list", () => {
      button.simulate("click")

      expect(list.props().style.display).toEqual("block")
    })

    describe("when clicks again in the button", () => {
      it("hiddens the list", () => {
        button.simulate("click")

        expect(list.props().style.display).toEqual("none")
      })
    })

    describe("when clicks in an item of list", () => {
      it("changes label", () => {
        const item = list.find("li").first()
        const label = wrapper.find("button").first()

        button.simulate("click")
        item.simulate("click")

        expect(label.text()).toEqual("Dropdown result 1")
      })
    })
  })
})
