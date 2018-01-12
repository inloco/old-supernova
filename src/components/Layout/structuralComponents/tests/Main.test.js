import React from 'react'
import Main from './../Main'
import { shallow } from 'enzyme'

describe('Main', () => {
  const wrapper = shallow(
    <Main>
      <div>Children</div>
    </Main>
  )

  it('is a main', () => {
    const current = wrapper.type()
    const expected = 'main'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__main')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})