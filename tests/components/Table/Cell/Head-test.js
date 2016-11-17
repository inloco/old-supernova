import { mount } from "enzyme"
import React from "react"
import CellHead from "../../../../src/components/Table/Cell/Head"

describe("Cell Head", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<CellHead type="number" color="#fff">Id</CellHead>)
  })

  it("has children", () => {
    expect(wrapper.props().children).toEqual("Id")
  })

  it("has type", () => {
    expect(wrapper.props().type).toEqual("number")
  })

  it("has color", () => {
    expect(wrapper.props().color).toEqual("#fff")
  })
})
