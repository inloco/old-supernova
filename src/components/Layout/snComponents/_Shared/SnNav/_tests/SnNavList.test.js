import React from 'react'
import SnNavList from './../SnNavList'
import { shallow } from 'enzyme'

describe('SnNavList', () => {
  const wrapper = shallow(
    <SnNavList>
      <div>Children</div>
    </SnNavList>
  )

  it('is a ul', () => {
    const current = wrapper.type()
    const expected = 'ul'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-nav__list')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})