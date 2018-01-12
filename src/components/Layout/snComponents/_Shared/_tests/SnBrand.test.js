import React from 'react'
import SnBrand from './../SnBrand'
import { shallow } from 'enzyme'

describe('SnBrand', () => {
  describe('when has CollapsedSrc', () => {
    const src = 'Xalala'
    const alt = 'Alt'
    const collapsedSrc = 'CollapsedSrc'
    const wrapper = shallow(
      <SnBrand
        src={src}
        alt={alt}
        collapsedSrc={collapsedSrc}
      />
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-brand')

      expect(current).toBeTruthy()
    })

    it('has 2 imgs', () => {
      const current = wrapper.find('img')
      const expected = 2

      expect(current).toHaveLength(expected)
    })

    describe('the first img', () => {
      it('has specific class', () => {
        const current = wrapper.find('img').first()

        expect(current.hasClass('sn-brand__img__collapsed')).toBeTruthy()
      })

      it('has src', () => {
        const current = wrapper.find('img').first().props().src
        const expected = collapsedSrc

        expect(current).toEqual(expected)
      })

      it('has alt', () => {
        const current = wrapper.find('img').first().props().alt
        const expected = alt

        expect(current).toEqual(expected)
      })
    })

    describe('the last img', () => {
      it('has src', () => {
        const current = wrapper.find('img').last().props().src
        const expected = src

        expect(current).toEqual(expected)
      })

      it('has alt', () => {
        const current = wrapper.find('img').last().props().alt
        const expected = alt

        expect(current).toEqual(expected)
      })
    })
  })

  describe('when has no CollapsedSrc', () => {
    const src = 'Xalala'
    const alt = 'Alt'
    const wrapper = shallow(
      <SnBrand
        src={src}
        alt={alt}
      />
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-brand')

      expect(current).toBeTruthy()
    })

    it('has 1 img', () => {
      const current = wrapper.find('img')
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    describe('the img', () => {
      it('has src', () => {
        const current = wrapper.find('img').last().props().src
        const expected = src

        expect(current).toEqual(expected)
      })

      it('has alt', () => {
        const current = wrapper.find('img').last().props().alt
        const expected = alt

        expect(current).toEqual(expected)
      })
    })
  })
})