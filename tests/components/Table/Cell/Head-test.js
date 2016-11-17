import { mount } from "enzyme"
import sinon from "sinon"
import React from "react"
import CellHead from "../../../../src/components/Table/Cell/Head"

describe("Cell Head", () => {
  let wrapper, spyClick

  beforeEach(() => {
    spyClick = sinon.spy()
    wrapper = mount(
      <CellHead type="number" color="#fff" onClick={() => spyClick()}>
        Id
      </CellHead>
    )
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

  it("has onClick", () => {
    wrapper.simulate("click")
    expect(spyClick.calledOnce).toBeTruthy
  })
})
