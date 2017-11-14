import React from "react"
import Tooltip from "./../index"
import { shallow } from "enzyme"

describe("Tooltip", () => {
  const wrapper = shallow(
    <Tooltip
      message="Foo message"
      size="sm"
      position="bottom-left"
    >
      Foo
    </Tooltip>
  )

  it("has message", () => {
    expect(wrapper.props()['aria-label']).toEqual("Foo message")
  })

  it("has children", () => {
    expect(wrapper.text()).toEqual("Foo")
  })

  it("has tooltip className", () => {
    expect(wrapper.hasClass("sn-tooltips")).toBeTruthy()
  })

  it("has position className", () => {
    expect(wrapper.hasClass("sn-tooltips--bottom-left")).toBeTruthy()
  })

  it("has size className", () => {
    expect(wrapper.hasClass("sn-tooltips--sm")).toBeTruthy()
  })

  describe('when has className prop', () => {
    const customClass = 'custom-class'
    wrapper.setProps({className: customClass})

    it('has custom class', () => {
      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })
})
