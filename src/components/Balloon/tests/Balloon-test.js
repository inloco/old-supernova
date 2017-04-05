import React from 'react'
import Balloon from './../index'
import Icon from './../../Icons'
import { shallow } from 'enzyme'

describe('Balloon', () => {
  const wrapper = shallow(
    <Balloon label="CPC" value="123" />
  )

  it('has balloon', () => {
    const balloon = wrapper.find('.sn-balloon')

    expect(balloon.length).toEqual(1)
  })

  it('has title', () => {
    const title = wrapper.find('.sn-balloon__title')

    expect(title.text()).toEqual('CPC')
  })

  it('has value', () => {
    const expectedValue = '123'
    const currentValue = wrapper.find('.sn-balloon__value')

    expect(currentValue.text()).toEqual(expectedValue)
  })

  describe('when has addon', () => {
    it('is not seted it is not displayed', () => {
      const addon = wrapper.find('.sn-balloon__currency')

      expect(addon.length).toEqual(0)
    })
  
    it('is seted it is displayed', () => {
      wrapper.setProps({ addon: '%' })
      const addon = wrapper.find('.sn-balloon__currency')

      expect(addon.text()).toEqual('%')
    })
  })

  describe('when has icon', () => {
    it('is not seted it is not displayed', () => {
      const icon = wrapper.find(Icon)

      expect(icon.length).toEqual(0)
    })

    it('is seted it is displayed', () => {
      wrapper.setProps({ icon: 'add' })
      const icon = wrapper.find(Icon)

      expect(icon.length).toEqual(1)
    })
  })

  describe('when has graphic', () => {
    it('is not seted it is not displayed', () => {
      const addon = wrapper.find('.sn-balloon__graphic')

      expect(addon.length).toEqual(0)
    })

    it('is seted it is displayed', () => {
      const Graphic = props => { return ( <div />) }
      wrapper.setProps({ graphic: <Graphic /> })
      const graphic = wrapper.find(Graphic)

      expect(graphic.length).toEqual(1)
    })
  })
})