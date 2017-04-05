import React from 'react'
import Title from './../Title'
import { shallow } from 'enzyme'

describe('Title', () => {
  let wrapper = shallow(
      <Title>
        Some content
      </Title>)

  it('has Title modal class', () => {
    expect(wrapper.hasClass('sn-layout__drawer-title')).toBeTruthy()
  })

  it('Title has content', () => {
    expect(wrapper.props().children).toEqual('Some content')
  })

  describe('empty Title', () => {
    it('has no children', () => {
      wrapper.setProps({ children: [] })

      expect(wrapper.props().children.length).toEqual(0)
    })
  })
})