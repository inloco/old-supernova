import React from 'react'
import SnNavIcon from './../SnNavIcon'
import Icon from './../../../../../Icons'
import { shallow } from 'enzyme'

describe('SnNavIcon', () => {
  describe('when has no src', () => {
    describe('when has no code', () => {
      const wrapper = shallow(
        <SnNavIcon />
      )

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item__icon')

        expect(current).toBeTruthy()
      })

      describe('Icon', () => {
        it('has a Icon', () => {
          const current = wrapper.find(Icon)
          const expected = 1

          expect(current).toHaveLength(expected)
        })

        it('has a Icon with props code', () => {
          const current = wrapper.find(Icon).props().code
          const expected = 'menu'

          expect(current).toEqual(expected)
        })
      })
    })

    describe('when has code', () => {
      const code = 'search'
      const wrapper = shallow(
        <SnNavIcon code={code} />
      )

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item__icon')

        expect(current).toBeTruthy()
      })

      describe('Icon', () => {
        it('has a Icon', () => {
          const current = wrapper.find(Icon)
          const expected = 1

          expect(current).toHaveLength(expected)
        })

        it('has a Icon with props code', () => {
          const current = wrapper.find(Icon).props().code
          const expected = code

          expect(current).toEqual(expected)
        })
      })
    })
  })

  describe('when has src', () => {
    const src = 'Src'
    const alt = 'Alt'
    const wrapper = shallow(
      <SnNavIcon src={src} alt={alt} />
    )

    it('has specific class', () => {
      const current = wrapper.hasClass('sn-nav__list__item__icon')

      expect(current).toBeTruthy()
    })

    describe('Img', () => {
      it('is a img', () => {
        const current = wrapper.children().type()
        const expected = 'img'

        expect(current).toBe(expected)
      })

      it('is a img with src props', () => {
        const current = wrapper.find('img').props().src
        const expected = src

        expect(current).toBe(expected)
      })

      it('is a img with alt props', () => {
        const current = wrapper.find('img').props().alt
        const expected = alt

        expect(current).toBe(expected)
      })
    })
  })
})