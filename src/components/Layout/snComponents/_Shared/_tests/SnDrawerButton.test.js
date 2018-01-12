import React from 'react'
import SnDrawerButton from './../SnDrawerButton'
import Icon from './../../../../Icons'
import { shallow } from 'enzyme'

describe('SnDrawerButton', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <SnDrawerButton onClick={onClick} />
  )

  it('is a button', () => {
    const current = wrapper.type()
    const expected = 'button'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-drawer-button')

    expect(current).toBeTruthy()
  })

  describe('Icon', () => {
    it('is a Icon', () => {
      const current = wrapper.find(Icon)

      expect(current).toHaveLength(1)
    })

    it('has code props', () => {
      const current = wrapper.find(Icon).props().code
      const expected = 'menu'

      expect(current).toEqual(expected)
    })

    it('has onClick props', () => {
      const current = wrapper.find(Icon).props().onClick
      const expected = onClick

      expect(current).toEqual(expected)
    })
  })
})