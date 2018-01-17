import React from 'react'
import SnNavLink from './../SnNavLink'
import SnNavText from './../../SnNavText'
import SnNavIcon from './../../SnNavIcon'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

describe('SnNavLink', () => {
  describe('when external is false', () => {
    const href = 'Href'
    const target = 'Target'
    const onClick = jest.fn()
    const wrapper = shallow(
      <SnNavLink href={href} target={target} onClick={onClick}>
        Children
      </SnNavLink>
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

    it('calls on Click on link is clicked', () => {
      wrapper.find(Link).simulate('click')

      expect(onClick).toBeCalled()
    })

    describe('Children', () => {
      const children = wrapper.children()

      it('has a Link', () => {
        const children = wrapper.find(Link)
        const expected = 1

        expect(children).toHaveLength(expected)
      })

      it('has a children', () => {
        const current = children.children()

        expect(current).not.toBe(undefined)
      })

      it('has specific class', () => {
        const current = children.hasClass('sn-nav__list__item__link')

        expect(current).toBeTruthy()
      })

      it('has to props', () => {
        const current = children.props().to
        const expected = href

        expect(current).toEqual(expected)
      })

      it('has target props', () => {
        const current = children.props().target
        const expected = target

        expect(current).toEqual(expected)
      })

      it('has a SnNavText', () => {
        const current = wrapper.find(SnNavText)
        const expected = 1

        expect(current).toHaveLength(expected)
      })
    })

    describe('when has no iconCode', () => {
      it('has a SnNavIcon', () => {
        const current = wrapper.find(SnNavIcon)
        const expected = 0

        expect(current).toHaveLength(expected)
      })
    })
  })

  describe('when external is true', () => {
    const href = 'Href'
    const target = 'Target'
    const onClick = jest.fn()
    const wrapper = shallow(
      <SnNavLink
        href={href}
        target={target}
        onClick={onClick}
        external
      >
        Children
      </SnNavLink>
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

    it('calls on Click on link is clicked', () => {
      wrapper.find('a').simulate('click')

      expect(onClick).toBeCalled()
    })

    describe('Children', () => {
      const children = wrapper.children()

      it('has is a', () => {
        const current = children.type()
        const expected = 'a'

        expect(current).toEqual(expected)
      })

      it('has a children', () => {
        const current = children.children()

        expect(current).not.toBe(undefined)
      })

      it('has specific class', () => {
        const current = children.hasClass('sn-nav__list__item__link')

        expect(current).toBeTruthy()
      })

      it('has href props', () => {
        const current = children.props().href
        const expected = href

        expect(current).toEqual(expected)
      })

      it('has target props', () => {
        const current = children.props().target
        const expected = target

        expect(current).toEqual(expected)
      })

      it('has a SnNavText', () => {
        const current = wrapper.find(SnNavText)
        const expected = 1

        expect(current).toHaveLength(expected)
      })
    })

    describe('when has no iconCode', () => {
      it('has a SnNavIcon', () => {
        const current = wrapper.find(SnNavIcon)
        const expected = 0

        expect(current).toHaveLength(expected)
      })
    })
  })

  describe('when has iconCode', () => {
    const iconCode = 'menu'
    const wrapper = shallow(
      <SnNavLink iconCode={iconCode}>
        Children
      </SnNavLink>
    )

    it('has SnNavIcon', () => {
      const current = wrapper.find(SnNavIcon)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has code props', () => {
      const current = wrapper.find(SnNavIcon).props().code
      const expected = iconCode

      expect(current).toEqual(expected)
    })
  })

  describe('handleCloseDrawerClick', () => {
    const handleCloseDrawerClick = jest.fn()
    const context = {
      handleCloseDrawerClick
    }
    const wrapper = shallow(
      <SnNavLink>
        Children
      </SnNavLink>,
      { context }
    )

    it('calls handleCloseDrawerClick on li click', () => {
      wrapper.find('li').simulate('click')
 
      expect(handleCloseDrawerClick).toBeCalled()
    })
  })
})