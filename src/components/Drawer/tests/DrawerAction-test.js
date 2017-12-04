import React from 'react'
import Action from './../Action'
import { shallow } from 'enzyme'

describe('Action', () => {
  const baseClass = 'sn-layout__drawer-action'

  const onClick = jest.fn()
  const wrapper = shallow(
    <Action
      text="a-simple-text"
      onClick={onClick}
    />
  )

  it('has a Text component', () => {
    expect(wrapper.find('Text').exists()).toBeTruthy()
  })

  it('calls onClick function', () => {
    wrapper.simulate('click')
    expect(onClick).toBeCalled()
  })

  it('has only default class', () => {
    expect(wrapper.hasClass(baseClass)).toBeTruthy()
  })

  describe('has className prop', () => {
    const customClass = 'custom-class'

    beforeEach(() => {
      wrapper.setProps({className: customClass})
    })

    it('has custom class alongside base class', () => {
      expect(wrapper.hasClass(customClass)).toBeTruthy()
      expect(wrapper.hasClass(baseClass)).toBeTruthy()
    })
  })
})
