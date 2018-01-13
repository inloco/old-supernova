import React from 'react'
import SnNav from './../index'
import { shallow } from 'enzyme'

describe('SnNav', () => {
  describe('when isCollapsed is false', () => {
    const wrapper = shallow(
      <SnNav isCollapsed={false}>
        <div>Children</div>
      </SnNav>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-nav')

      expect(current).toBeTruthy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })
  })

  describe('when isCollapsed is true', () => {
    const wrapper = shallow(
      <SnNav isCollapsed>
        <div>Children</div>
      </SnNav>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-nav')

      expect(current).toBeTruthy()
    })

    it('has collapsed class', () => {
      const current = wrapper.hasClass('is-collapsed')

      expect(current).toBeTruthy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })
  })
})