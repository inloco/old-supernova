import React from 'react'
import Subheader from './../Subheader'
import { shallow } from 'enzyme'

describe('Subheader', () => {
  const wrapper = shallow(
    <Subheader>
      <div>Children</div>
    </Subheader>
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__main__subheader')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})