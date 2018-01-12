import React from 'react'
import SnHeaderTitle from './../SnHeaderTitle'
import { shallow } from 'enzyme'

describe('SnHeaderTitle', () => {
  const wrapper = shallow(
    <SnHeaderTitle>
      <div>Children</div>
    </SnHeaderTitle>
  )

  it('is a ul', () => {
    const current = wrapper.type()
    const expected = 'ul'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-header__title')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})