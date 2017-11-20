import { shallow, mount } from 'enzyme'
import React from 'react'
import Pills from './../index'
import Pill from './../Pill'

describe('Pills items', () => {
  const onClick = jest.fn()
  const wrapper = mount(
      <Pill onClick={onClick} label="Item 1" value="zoombie"/>)

  it(`has 'pills items' className`, () => {
    const current = wrapper.find('label').hasClass('sn-pills__label')

    expect(current).toBeTruthy()
  })

  it('has content', () => {
    const label = wrapper.find('label').find('span')

    expect(label.text()).toEqual('Item 1')
  })

  it('handle click', () => {
    const label = wrapper.find('.sn-pills__label')

    label.simulate('click')
    expect(onClick).toBeCalled()
  })

  describe('Input', () => {
    const inputWrapper = wrapper.find('input[type="radio"]')

    it('has zoombie value', () => {
      expect(inputWrapper.props().value).toEqual('zoombie')
    })

    it('has no lala name', () => {
      expect(inputWrapper.props().name).toEqual(undefined)
    })
  })

  describe('active', () => {
    it('span has active class', () => {
      wrapper.setProps({ active: true })
      const span = wrapper.find('span')

      expect(span.props().className).toEqual('sn-pills__label--content active')
    })
  })

  describe('onChange', () => {
    it('perform onChange', () => {
      wrapper.setProps({
        onClick: undefined,
        onChange: onClick
      })
      const label = wrapper.find('.sn-pills__label')

      label.simulate('click')
      expect(onClick).toBeCalled()
    })
  })
})
