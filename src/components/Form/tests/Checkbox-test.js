import React from "react"
import Checkbox from "./../Checkbox"
import { shallow } from "enzyme"

describe("Checkbox", () => {
  const wrapper = shallow(<Checkbox/>)

  it("has checkbox class", () => {
    expect(wrapper.hasClass("sn-checkbox")).toBeTruthy()
  })

  it("has checkbox input", () => {
    expect(wrapper.find("input").length).toEqual(1)
  })

  it("has checkbox icon", () => {
    expect(wrapper.find(".sn-input__icon").length).toEqual(1)
  })

  it("executes onClick props when is clicked", () => {
    const clickFun = jest.fn()
    const wrapper = shallow(<Checkbox onClick={clickFun}/>)

    wrapper.find('input').simulate('click')

    expect(clickFun.mock.calls.length).toEqual(1)
  })

  it("comes checked when is true", () => {
    const wrapper = shallow(<Checkbox checked={true}/>)

    expect(wrapper.find("input").props().checked).toBeTruthy()
  })
})