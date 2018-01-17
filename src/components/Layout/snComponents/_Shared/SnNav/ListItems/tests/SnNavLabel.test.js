import React from 'react'
import SnNavLabel from './../SnNavLabel'
import { shallow } from 'enzyme'

describe('SnNavLabel', () => {
  const wrapper = shallow(
    <SnNavLabel>
      Children
    </SnNavLabel>
  )

  it('is a li', () => {
    const current = wrapper.type()
    const expected = 'li'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-nav__list__label')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})