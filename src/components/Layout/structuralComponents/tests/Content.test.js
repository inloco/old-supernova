import React from 'react'
import Content from './../Content'
import { shallow } from 'enzyme'

describe('Content', () => {
  const wrapper = shallow(
    <Content>
      <div>Children</div>
    </Content>
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-layout__main__content')

    expect(current).toBeTruthy()
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })

  it('should pass ref to children as context data', () => {
    const provider = wrapper.childAt(0)
    expect(provider.props()).toHaveProperty('value', wrapper.instance().ref)
  })
})
