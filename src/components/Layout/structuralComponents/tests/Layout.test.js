import React from 'react'
import Layout from './../Layout'
import { shallow } from 'enzyme'

describe('Layout', () => {
  describe('when drawerIsOpen is true', () => {
    const wrapper = shallow(
      <Layout drawerIsOpen>
        <div>Children</div>
      </Layout>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-layout')

      expect(current).toBeTruthy()
    })

    it('has a open drawer class', () => {
      const current = wrapper.hasClass('sn-layout--open-drawer')

      expect(current).toBeTruthy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })
  })

  describe('when drawerIsOpen is false', () => {
    const wrapper = shallow(
      <Layout drawerIsOpen={false}>
        <div>Children</div>
      </Layout>
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-layout')

      expect(current).toBeTruthy()
    })

    it('has a open drawer class', () => {
      const current = wrapper.hasClass('sn-layout--open-drawer')

      expect(current).toBeFalsy()
    })

    it('has children', () => {
      const children = wrapper.children()

      expect(children).not.toBe(undefined)
    })
  })
})