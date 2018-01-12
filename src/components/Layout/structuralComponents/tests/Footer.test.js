import React from 'react'
import Footer from './../Footer'
import { shallow } from 'enzyme'

describe('Footer', () => {
  const wrapper = shallow(
    <Footer>
      <div>Children</div>
    </Footer>
  )

  it('is a footer', () => {
    const current = wrapper.type()
    const expected = 'footer'

    expect(current).toBe(expected)
  })

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__main__footer')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})