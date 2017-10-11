import React from "react"
import FormGroup from './../Group'
import Checkbox from './../Checkbox'
import Tooltip from './../../Tooltip'
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

  describe('when has info', () => {
    beforeEach(() => {
      wrapper.setProps({ info: 'some' })
    })

    it('has tooltip with message', () => {
      expect(wrapper.find(Tooltip).props().message).toEqual('some')
    })

    describe('when has info on left', () => {
      beforeEach(() => {
        wrapper.setProps({ infoAlign: 'left' })
      })

      it('has tooltip on the left', () => {
        expect(wrapper.find(".sn-form-group__label--tooltip-left")).toBeTruthy()
      })
    })
  })

  describe('when is disabled', () => {
    beforeEach(() => {
      wrapper.setProps({ disabled: true })
    })

    it('has a disabled label', () => {
      expect(wrapper.find('.sn-form-group__label--disabled').exists()).toBeTruthy()
    })
  })
})
