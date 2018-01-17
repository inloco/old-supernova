import React from 'react'
import Header from './../Header'
import { shallow } from 'enzyme'

describe('Header', () => {
  const wrapper = shallow(
    <Header>
      <div>Children</div>
    </Header>
  )

  it('is a header', () => {
    const current = wrapper.type()
    const expected = 'header'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__main__header')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})