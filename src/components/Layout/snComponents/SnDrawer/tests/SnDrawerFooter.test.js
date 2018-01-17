import React from 'react'
import SnDrawerFooter from './../SnDrawerFooter'
import { shallow } from 'enzyme'

describe('SnDrawerFooter', () => {
  const wrapper = shallow(
    <SnDrawerFooter>
      <div>Children</div>
    </SnDrawerFooter>
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-drawer__footer')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})