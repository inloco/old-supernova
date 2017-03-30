import React from "react"
import FormGroup from './../Group'
import Checkbox from './../Checkbox'
import { shallow } from 'enzyme'

describe("Form Group", () => {
  const wrapper = shallow(
    <FormGroup
      label="Form Group Label"
      id="form-group-factory"
      name="foo"
      className="class-here"
    >
      <Checkbox label="Texto do Checkbox" id="checkbox-factory"/>
      <Checkbox label="Texto do Checkbox"/>
    </FormGroup>
  )

  it("has group class", () => {
    expect(wrapper.hasClass("sn-form-group")).toBeTruthy()
  })

  it("has an label with 'Form Group Label' content", () => {
    const label = wrapper.find(".sn-form-group__label")

    expect(label.text()).toEqual("Form Group Label")
  })

  it("has 2 checkboxes", () => {
    const checkboxes = wrapper.find(Checkbox)

    expect(checkboxes.length).toEqual(2)
  })

  it("has children with name", () => {
    const expectedName = wrapper.find(Checkbox).first().props().name
    const currentName = "foo"

    expect(currentName).toEqual(expectedName)
  })

  it("has className", () => {
    expect(wrapper.hasClass("class-here")).toBeTruthy()
  })

  it("has id", () => {
    const expectedId = "form-group-factory"
    const currentId = wrapper.props().id

    expect(currentId).toEqual(expectedId)
  })

  describe('when has errors', () => {
    beforeAll(() => {
      wrapper.setProps({ error: ['Field is required']})
    })

    it('has error className', () => {
      expect(wrapper.hasClass('has-error')).toBeTruthy()
    })

    it('displays error message', () => {
      const message = wrapper.find('.sn-form-group__message')

      expect(message.text()).toEqual('Field is required')
    })
  })
})