import React from 'react'
import Info from './../index'
import { shallow } from 'enzyme'

describe('Input', () => {
  const expected = 'Some text'
  const wrapper = shallow(<Info text={expected} />)

  it('has text', () => {
    const current = wrapper.props().title

    expect(current).toEqual(expected)
  })
})
