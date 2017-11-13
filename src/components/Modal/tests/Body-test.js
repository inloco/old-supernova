import React from 'react'
import Body from './../Body'
import { shallow } from 'enzyme'

describe('Modal', () => {
  let wrapper = shallow(
      <Body>
        Some content
      </Body>)

  it('has Body modal class', () => {
    expect(wrapper.hasClass('sn-modal__body')).toBeTruthy()
  })

  it('Body has content', () => {
    expect(wrapper.props().children).toEqual('Some content')
  })

  describe('empty Body', () => {
    it('has no children', () => {
      wrapper.setProps({ children: [] })

      expect(wrapper.props().children.length).toEqual(0)
    })
  })

  describe('when has className prop', () => {
    const customClass = 'custom-class'
    wrapper.setProps({ className: customClass })

    it('has custom class', () => {
      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })
})