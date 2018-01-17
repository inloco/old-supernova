import React from 'react'
import Aside from './../Aside'
import { shallow } from 'enzyme'

describe('Aside', () => {
  const wrapper = shallow(
    <Aside>
      <div>Children</div>
    </Aside>
  )

  it('is a aside', () => {
    const current = wrapper.type()
    const expected = 'aside'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__aside')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})