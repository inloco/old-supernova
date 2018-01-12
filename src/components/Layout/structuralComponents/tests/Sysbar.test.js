import React from 'react'
import Sysbar from './../Sysbar'
import { shallow } from 'enzyme'

describe('Sysbar', () => {
  describe('when hasDrawer is true', () => {
    const wrapper = shallow(
      <Sysbar hasDrawer>
        <div>Children</div>
      </Sysbar>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-layout__sysbar')

      expect(current).toBeTruthy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })

    it('has specific theme class', () => {
      const current = wrapper.hasClass('sn-layout__sysbar--light-theme')

      expect(current).toBeTruthy()
    })
  })

  describe('when hasDrawer is false', () => {
    const wrapper = shallow(
      <Sysbar hasDrawer={false}>
        <div>Children</div>
      </Sysbar>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-layout__sysbar')

      expect(current).toBeTruthy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })

    it('has specific theme class', () => {
      const current = wrapper.hasClass('sn-layout__sysbar--dark-theme')

      expect(current).toBeTruthy()
    })
  })
})