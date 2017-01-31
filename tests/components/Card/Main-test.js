import React from "react"
import Card from "../../../src/components/Card/Main"
import { shallow } from 'enzyme'

describe("Card", () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <Card className="some" onClick={onClick}>
      <h1>Some</h1>
    </Card>
  )

  it("has card class", () => {
    expect(wrapper.hasClass('sn-card')).toBeTruthy()
  })

  it("has custom className", () => {
    expect(wrapper.hasClass('some')).toBeTruthy()
  })

  it("has children", () => {
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  describe("when click", () => {
    it("calls onClick", () => {
      wrapper.simulate('click')

      expect(onClick).toBeCalled()
    })
  })
})