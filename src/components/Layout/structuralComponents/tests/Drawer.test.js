import React from 'react'
import Drawer from './../Drawer'
import { shallow } from 'enzyme'

describe('Drawer', () => {
  describe('when is colapsed', () => {
    const handleCloseDrawerClick = jest.fn()
    const wrapper = shallow(
      <Drawer isCollapsed handleCloseDrawerClick={handleCloseDrawerClick}>
        <div>Children</div>
      </Drawer>
    )

    it('has specific class', () => {
      const current = wrapper.children().first()

      expect(current.hasClass('sn-layout__drawer')).toBeTruthy()
    })

    it('has a collapsed class', () => {
      const current = wrapper.children().first()

      expect(current.hasClass('sn-layout__drawer--collapsed')).toBeTruthy()
    })

    it('has a obfuscator', () => {
      const current = wrapper.children().last()

      expect(current.hasClass('sn-layout__obfuscator')).toBeTruthy()
    })

    it('has children', () => {
      const current = wrapper.children().last()

      expect(current).not.toBe(undefined)
    })

    it('executes handleCloseDrawerClick props when is clicked', () => {
      wrapper.children().last().simulate('click')

      expect(handleCloseDrawerClick).toBeCalled()
    })
  })

  describe('when is not colapsed', () => {
    const handleCloseDrawerClick = jest.fn()
    const wrapper = shallow(
      <Drawer
        isCollapsed={false}
        handleCloseDrawerClick={handleCloseDrawerClick}
      >
        <div>Children</div>
      </Drawer>
    )

    it('has specific class', () => {
      const current = wrapper.children().first()

      expect(current.hasClass('sn-layout__drawer')).toBeTruthy()
    })

    it('has a collapsed class', () => {
      const current = wrapper.children().first()

      expect(current.hasClass('sn-layout__drawer--collapsed')).toBeFalsy()
    })

    it('has a obfuscator', () => {
      const current = wrapper.children().last()

      expect(current.hasClass('sn-layout__obfuscator')).toBeTruthy()
    })

    it('has children', () => {
      const current = wrapper.children().last()

      expect(current).not.toBe(undefined)
    })

    it('executes handleCloseDrawerClick props when is clicked', () => {
      wrapper.children().last().simulate('click')

      expect(handleCloseDrawerClick).toBeCalled()
    })
  })
})
