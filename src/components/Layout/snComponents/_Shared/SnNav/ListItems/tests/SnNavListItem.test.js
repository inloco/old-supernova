import React from 'react'
import SnNavListItem from './../SnNavListItem'
import { shallow, mount } from 'enzyme'

describe('SnNavListItem', () => {
  describe('when the state expanded is false', () => {
    describe('when expandable is false', () => {
      const wrapper = shallow(
        <SnNavListItem expandable={false}>
          <div>Children</div>
        </SnNavListItem>
      )

      it('is a li', () => {
        const current = wrapper.type()
        const expected = 'li'

        expect(current).toBe(expected)
      })

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item')

        expect(current).toBeTruthy()
      })

      it('has no expandable class', () => {
        const current = wrapper.hasClass('sn-nav__list__item--expandable')

        expect(current).toBeFalsy()
      })

      it('has no expanded class', () => {
        const current = wrapper.hasClass('is-expanded')

        expect(current).toBeFalsy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })

    describe('when expandable is true', () => {
      const wrapper = shallow(
        <SnNavListItem expandable>
          <div>Children</div>
        </SnNavListItem>
      )

      it('is a li', () => {
        const current = wrapper.type()
        const expected = 'li'

        expect(current).toBe(expected)
      })

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item')

        expect(current).toBeTruthy()
      })

      it('has expandable class', () => {
        const current = wrapper.hasClass('sn-nav__list__item--expandable')

        expect(current).toBeTruthy()
      })

      it('has no expanded class', () => {
        const current = wrapper.hasClass('is-expanded')

        expect(current).toBeFalsy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })
  })

  describe('when the state expanded is true', () => {
    describe('when expandable is false', () => {
      const wrapper = shallow(
        <SnNavListItem expandable={false}>
          <div>Children</div>
        </SnNavListItem>
      ).setState({ expanded: true })

      it('is a li', () => {
        const current = wrapper.type()
        const expected = 'li'

        expect(current).toBe(expected)
      })

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item')

        expect(current).toBeTruthy()
      })

      it('has no expandable class', () => {
        const current = wrapper.hasClass('sn-nav__list__item--expandable')

        expect(current).toBeFalsy()
      })

      it('has expanded class', () => {
        const current = wrapper.hasClass('is-expanded')

        expect(current).toBeTruthy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })

    describe('when expandable is true', () => {
      const wrapper = shallow(
        <SnNavListItem expandable>
          <div>Children</div>
        </SnNavListItem>
      ).setState({ expanded: true })

      it('is a li', () => {
        const current = wrapper.type()
        const expected = 'li'

        expect(current).toBe(expected)
      })

      it('has specific class', () => {
        const current = wrapper.hasClass('sn-nav__list__item')

        expect(current).toBeTruthy()
      })

      it('has expandable class', () => {
        const current = wrapper.hasClass('sn-nav__list__item--expandable')

        expect(current).toBeTruthy()
      })

      it('has expanded class', () => {
        const current = wrapper.hasClass('is-expanded')

        expect(current).toBeTruthy()
      })

      it('has children', () => {
        const children = wrapper.children()

        expect(children).not.toBe(undefined)
      })
    })
  })

  describe('handleExpansion', () => {
    describe('when state expanded false', () => {
      describe('when expandable is false', () => {
        const stopPropagation = jest.fn()
        const event = { stopPropagation }
        const wrapper = shallow(
          <SnNavListItem expandable={false} />
        )

        it('does not change the state', () => {
          const before = wrapper.state().expanded
          wrapper.instance().handleExpansion(event)
          const current = wrapper.state().expanded
          const expected = before

          expect(current).toEqual(expected)
        })
      })

      describe('when expandable is true', () => {
        const stopPropagation = jest.fn()
        const event = { stopPropagation }
        const wrapper = shallow(
          <SnNavListItem expandable />
        )

        it('does not change the state', () => {
          wrapper.instance().handleExpansion(event)
          const current = wrapper.state().expanded
          const expected = true

          expect(current).toEqual(expected)
        })
      })
    })

    describe('when state expanded true', () => {
      describe('when expandable is false', () => {
        const stopPropagation = jest.fn()
        const event = { stopPropagation }
        const wrapper = shallow(
          <SnNavListItem expandable={false} />
        ).setState({ expanded: true })

        it('does not change the state', () => {
          const before = wrapper.state().expanded
          wrapper.instance().handleExpansion(event)
          const current = wrapper.state().expanded
          const expected = before

          expect(current).toEqual(expected)
        })
      })

      describe('when expandable is true', () => {
        const stopPropagation = jest.fn()
        const event = { stopPropagation }
        const wrapper = shallow(
          <SnNavListItem expandable />
        ).setState({ expanded: true })

        it('does not change the state', () => {
          const before = wrapper.state().expanded
          wrapper.instance().handleExpansion(event)
          const current = wrapper.state().expanded
          const expected = false

          expect(current).toEqual(expected)
        })
      })
    })
  })

  describe('handleClickOutside', () => {
    const wrapper = mount(
      <SnNavListItem expandable={false}>
        <div>Children</div>
      </SnNavListItem>
    ).setState({ expanded: true })

    it('should change the expanded state to false', () => {
      const event = { target: 'somTarget' }
      wrapper.instance().handleClickOutside(event)

      const current = wrapper.state().expanded

      expect(current).toBeFalsy()
    })
  })
})