import { shallow, mount } from 'enzyme'
import React from 'react'
import Pills from './../index'
import Pill from './../Pill'

describe('Pills items', () => {
  const wrapper = mount(
      <Pill label="Item 1" value="zoombie"/>)

  it(`has 'pills items' className`, () => {
    expect(wrapper.hasClass('sn-pills__label')).toBeTruthy()
  })

  it('has content', () => {
    const label = wrapper.find('label').find('span')
  
    expect(label.text()).toEqual('Item 1')
  })

  
  describe('Input', () => {
    const inputWrapper = wrapper.find('input[type="radio"]')

    it('has zoombie value', () => {
      expect(inputWrapper.props().value).toEqual('zoombie')
    })

    it('has lala name', () => {
      expect(inputWrapper.props().name).toEqual(undefined)
    })

    it('is checked', () => {
      expect(inputWrapper.props().defaultChecked).toBeFalsy()
    })
  })
})