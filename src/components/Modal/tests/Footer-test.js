import React from 'react'
import Footer from './../Footer'
import { shallow } from 'enzyme'

describe('Modal', () => {
  let wrapper = shallow(
      <Footer>
        Some content
      </Footer>)

  it('has footer modal class', () => {
    expect(wrapper.hasClass('sn-modal__footer')).toBeTruthy()
  })

  it('footer has content', () => {
    expect(wrapper.props().children).toEqual('Some content')
  })

  describe('empty footer', () => {
    it('has no children', () => {
      wrapper.setProps({ children: [] })

      expect(wrapper.props().children.length).toEqual(0)
    })
  })
})