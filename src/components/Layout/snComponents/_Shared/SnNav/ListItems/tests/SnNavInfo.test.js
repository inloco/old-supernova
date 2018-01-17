import React from 'react'
import SnNavInfo from './../SnNavInfo'
import { shallow } from 'enzyme'

describe('SnNavInfo', () => {
  const wrapper = shallow(
    <SnNavInfo>
      Children
    </SnNavInfo>
  )

  it('is a li', () => {
    const current = wrapper.type()
    const expected = 'li'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-nav__list__info')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})