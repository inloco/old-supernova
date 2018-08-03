import React from 'react'
import SnHeaderTitleItem from './../SnHeaderTitleItem'
import { shallow } from 'enzyme'

describe('SnHeaderTitleItem', () => {
  const href = 'Href'
  const value = 'Value'
  const wrapper = shallow(
    <SnHeaderTitleItem href={href} value={value} />
  )

  it('is a li', () => {
    const current = wrapper.type()
    const expected = 'li'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-header__title__item')

    expect(current).toBeTruthy()
  })

  describe('a element', () => {
    it('is a', () => {
      const current = wrapper.find('a')
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has href', () => {
      const current = wrapper.find('a').props().href
      const expected = href

      expect(current).toEqual(expected)
    })

    it('has value', () => {
      const current = wrapper.find('a').props().children
      const expected = value

      expect(current).toEqual(expected)
    })
  })

  it('should pass "onClick" handler to root element', () => {
    const onClick = jest.fn()
    wrapper.setProps({ onClick })
    expect(wrapper.props()).toHaveProperty('onClick', onClick)
  })
})