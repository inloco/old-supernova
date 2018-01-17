import React from 'react'
import SnNavSection from './../SnNavSection'
import { shallow } from 'enzyme'

describe('SnNavSection', () => {
  describe('when has no children', () => {
    describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
      const context = { drawerIsCollapsed: false, drawerIsOpened: false }
      const wrapper = shallow(
        <SnNavSection />,
        { context }
      )

      it('is a hr', () => {
        const current = wrapper.type()
        const expected = 'hr'

        expect(current).toBe(expected)
      })
    })

    describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
      const context = { drawerIsCollapsed: false, drawerIsOpened: true }
      const wrapper = shallow(
        <SnNavSection />,
        { context }
      )

      it('is a hr', () => {
        const current = wrapper.type()
        const expected = 'hr'

        expect(current).toBe(expected)
      })
    })

    describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
      const context = { drawerIsCollapsed: true, drawerIsOpened: false }
      const wrapper = shallow(
        <SnNavSection />,
        { context }
      )

      it('is a hr', () => {
        const current = wrapper.type()
        const expected = 'hr'

        expect(current).toBe(expected)
      })
    })

    describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
      const context = { drawerIsCollapsed: true, drawerIsOpened: true }
      const wrapper = shallow(
        <SnNavSection />,
        { context }
      )

      it('is a hr', () => {
        const current = wrapper.type()
        const expected = 'hr'

        expect(current).toBe(expected)
      })
    })
  })

  describe('when has children', () => {
    describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
      const context = { drawerIsCollapsed: false, drawerIsOpened: false }
      const wrapper = shallow(
        <SnNavSection>
          Children
        </SnNavSection>,
        { context }
      )

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-drawer__label')

        expect(current).toBeTruthy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })

    describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
      const context = { drawerIsCollapsed: false, drawerIsOpened: true }
      const wrapper = shallow(
        <SnNavSection>
          Children
        </SnNavSection>,
        { context }
      )

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-drawer__label')

        expect(current).toBeTruthy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })

    describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
      const context = { drawerIsCollapsed: true, drawerIsOpened: false }
      const wrapper = shallow(
        <SnNavSection>
          Children
        </SnNavSection>,
        { context }
      )

      it('is a hr', () => {
        const current = wrapper.type()
        const expected = 'hr'

        expect(current).toBe(expected)
      })
    })

    describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
      const context = { drawerIsCollapsed: true, drawerIsOpened: true }
      const wrapper = shallow(
        <SnNavSection>
          Children
        </SnNavSection>,
        { context }
      )

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-drawer__label')

        expect(current).toBeTruthy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })
  })
})