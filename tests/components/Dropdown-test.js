import React from 'react'
import Dropdown from './../../src/components/Dropdown'
import { mount } from "enzyme"

describe("Dropdown", () => {
  const onChange = jest.fn()
  const options = [
    { value: 1, name: 'Option 1' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' }
  ]

  const wrapper = mount(
    <Dropdown
      value={1}
      options={options}
      layout="status"
      statusColor="#FF9800"
      onChange={onChange}
      callOnChangeWhenMount
    />
  )

  it('calls onChange when mount', () => {
    expect(onChange).toBeCalledWith(1)
  })

  it("has the dropdown class", () => {
    expect(wrapper.find(".sn-dropdown").length).toEqual(1)
  })

  it("has a button label equal 'dropdown'", () => {
    const button = wrapper.find(".sn-dropdown__button")

    expect(button.text()).toEqual("Option 1")
  })

  it("has a button with border colored", () => {
    const button = wrapper.find(".sn-dropdown__button")

    expect(button.props().style.borderLeftColor).toEqual("#FF9800")
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

  it("has status layout", () => {
    expect(wrapper.find(".sn-dropdown--status").length).toEqual(1)
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

        expect(label.text()).toEqual("Option 1")
      })
    })
  })

  describe('when dropdowns change the value', () => {
    it('calls onChange', () => {
      const dropdownItem = wrapper.find('li').last()

      dropdownItem.simulate('click')

      expect(onChange).toBeCalledWith(3)
    })
  })
})
