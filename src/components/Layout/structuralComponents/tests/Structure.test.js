import React from 'react'
import Structure from './../Structure'
import { shallow } from 'enzyme'

describe('Structure', () => {
  const wrapper = shallow(
    <Structure>
      <div>Children</div>
    </Structure>
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-structure')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})