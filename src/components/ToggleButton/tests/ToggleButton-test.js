import React from 'react'
import ToggleButton from './../'
import { shallow } from 'enzyme'

describe('ToggleButton', () => {
  const wrapper = shallow(<ToggleButton />)

  it('has toggle button className', () => {
    expect(wrapper.hasClass('sn-button--toggle')).toBeTruthy()
  })

  describe('when is active', () => {
    beforeAll(() => {
      wrapper.setProps({ active: true })
    })

    it('has active className', () => {
      expect(wrapper.hasClass('sn-button--toggle--active')).toBeTruthy()
    })
  })
})
