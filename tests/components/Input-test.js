import React from "react"
import Input from "./../../src/components/Input"
import Meter from "./../../src/components/Meter"
import Tooltip from "./../../src/components/Tooltip"
import { shallow } from 'enzyme'

describe("Input", () => {
  const wrapper = shallow(<Input
                            info="Some message"
                            label="E-mail"
                            type="email"
                            required={ true }
                            name="email"
                            autoFocus={ true }
                            value="foo@foo.com"
                            meter />)


  it("has type", () => {
    const expectedType = "email"
    const currentType = wrapper.find('input').props().type

    expect(currentType).toEqual(expectedType)
  })

  it("has name", () => {
    const expectedName = "email"
    const currentName = wrapper.find('input').props().name

    expect(currentName).toEqual(expectedName)
  })

  it("has value", () => {
    const expectedValue = "foo@foo.com"
    const currentValue = wrapper.find('input').props().value

    expect(currentValue).toEqual(expectedValue)
  })

  it("has tooltip", () => {
    expect(wrapper.find(Tooltip).length).toEqual(1)
  })

  it("is required", () => {
    expect(wrapper.find('input').props().required).toBeTruthy()
  })

  it("has meter", () => {
    expect(wrapper.find(Meter).length).toEqual(1)
  })

  describe("not required", () => {
    const wrapperNotRequired = shallow(<Input label="E-mail" />)

    it("is not required", () => {
      expect(wrapperNotRequired.find('input').props().required).toBeFalsy()
    })
  })
})
