import React from 'react'
import SnDrawer from './../index'
import SnBrand from './../../_Shared/SnBrand'
import SnNav from './../../_Shared/SnNav'
import SnDrawerFooter from './../SnDrawerFooter'
import { shallow } from 'enzyme'

describe('SnDrawer', () => {
  describe('when has src', () => {
    const src = 'Src'
    const alt = 'Alt'
    const collapsedSrc = 'CollapsedSrc'
    const nav = <SnNav />
    const footer = <SnDrawerFooter />
    const wrapper = shallow(
      <SnDrawer
        src={src}
        alt={alt}
        collapsedSrc={collapsedSrc}
        nav={nav}
        footer={footer}
      />
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-drawer')

      expect(current).toBeTruthy()
    })

    describe('SnBrand', () => {
      it('has src props', () => {
        const current = wrapper.find(SnBrand).props().src
        const expected = src

        expect(current).toEqual(expected)
      })

      it('has alt props', () => {
        const current = wrapper.find(SnBrand).props().alt
        const expected = alt

        expect(current).toEqual(expected)
      })

      it('has collapsedSrc props', () => {
        const current = wrapper.find(SnBrand).props().collapsedSrc
        const expected = collapsedSrc

        expect(current).toEqual(expected)
      })
    })

    it('has SnNav', () => {
      const current = wrapper.find(SnNav)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has SnDrawerFooter', () => {
      const current = wrapper.find(SnDrawerFooter)
      const expected = 1

      expect(current).toHaveLength(expected)
    })
  })

  describe('when has no src', () => {
    const nav = <SnNav />
    const footer = <SnDrawerFooter />
    const wrapper = shallow(
      <SnDrawer
        nav={nav}
        footer={footer}
      />
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-drawer')

      expect(current).toBeTruthy()
    })

    it('has no SnBrand', () => {
      const current = wrapper.find(SnBrand)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has SnNav', () => {
      const current = wrapper.find(SnNav)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has SnDrawerFooter', () => {
      const current = wrapper.find(SnDrawerFooter)
      const expected = 1

      expect(current).toHaveLength(expected)
    })
  })
})