import React from 'react'
import SnNavListItem from './../SnNavListItem'
import { shallow } from 'enzyme'

describe('SnNavListItem', () => {
  describe('when the state expandable is false', () => {
    describe('when expandable is false', () => {
      describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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
    })

    describe('when expandable is true', () => {
      describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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
  })

  describe('when the state expandable is true', () => {
    describe('when expandable is false', () => {
      describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

        it('has no expanded class', () => {
          const current = wrapper.hasClass('is-expanded')

          expect(current).toBeFalsy()
        })

        it('has children', () => {
          const children = wrapper.children()

          expect(children).not.toBe(undefined)
        })
      })

      describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable={false}>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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
    })

    describe('when expandable is true', () => {
      describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: false,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

      describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: false
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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

        it('has no expanded class', () => {
          const current = wrapper.hasClass('is-expanded')

          expect(current).toBeFalsy()
        })

        it('has children', () => {
          const children = wrapper.children()

          expect(children).not.toBe(undefined)
        })
      })

      describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
        const context = {
          drawerIsCollapsed: true,
          drawerIsOpened: true
        }
        const wrapper = shallow(
          <SnNavListItem expandable>
            <div>Children</div>
          </SnNavListItem>,
          { context }
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
})