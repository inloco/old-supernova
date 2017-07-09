import React from 'react'
import Label from './../index'
import { shallow } from 'enzyme'

describe('Label', () => {
  const wrapper = shallow(
    <Label
      value='Eu sou uma label'
      htmlFor='representando-tal-input'
    />
  )

  it('has value', () => {
    const current = wrapper.props().children
    const expected = 'Eu sou uma label'

    expect(current).toEqual(expected)
  })

  it('has html for', () => {
    const current = wrapper.props().htmlFor
    const expected = 'representando-tal-input'

    expect(current).toEqual(expected)
  })
})