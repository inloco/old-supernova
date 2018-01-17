import React from 'react'
import SnNavText from './../SnNavText'
import { shallow } from 'enzyme'

describe('SnNavText', () => {
  const wrapper = shallow(
    <SnNavText>
      Children
    </SnNavText>
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-nav__list__item__text')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})