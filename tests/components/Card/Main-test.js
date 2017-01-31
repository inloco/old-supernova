import React from "react"
import Card from "../../../src/components/Card/Main"
import { shallow } from 'enzyme'

describe("Card", () => {
  const wrapper = shallow(
    <Card className="some">
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
})