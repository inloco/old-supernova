import { mount } from "enzyme"
import React from "react"
import Label from "../../src/components/Label"

describe("Label", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Label
        htmlFor="input-a"
        value="Something"
        className="some-class" />
    )
  })

  it("has for", () => {
    expect(wrapper.props().htmlFor).toEqual("input-a")
  })

  it("has value", () => {
    expect(wrapper.props().value).toEqual("Something")
  })

  it("has class", () => {
    expect(wrapper.props().className).toEqual("some-class")
  })
})
