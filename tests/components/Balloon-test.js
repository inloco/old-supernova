import React from 'react'
import Balloon from './../../src/components/Balloon'
import Icon from './../../src/components/Icon'
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
    const value = wrapper.find('.sn-balloon__value')

    expect(value.text()).toEqual('123')
  })

  describe('when icon', () => {
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
})