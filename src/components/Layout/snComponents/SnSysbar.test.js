import React from 'react'
import SnSysbar from './SnSysbar'
import SnDrawerButton from './_Shared/SnDrawerButton'
import SnBrand from './_Shared/SnBrand'
import SnNav from './_Shared/SnNav'
import { shallow } from 'enzyme'

describe('SnSysbar', () => {
  const handleOpenDrawerClick = jest.fn()
  const src = 'Xalala'
  const alt = 'Alt'
  const nav = <SnNav />
  const context = { handleOpenDrawerClick }
  const wrapper = shallow(
    <SnSysbar src={src} alt={alt} nav={nav} />,
    { context }
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-sysbar')

    expect(current).toBeTruthy()
  })

  describe('SnDrawerButton', () => {
    it('has a SnDrawerButton', () => {
      const current = wrapper.find(SnDrawerButton)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has onClick props', () => {
      const current = wrapper.find(SnDrawerButton).props().onClick
      const expected = handleOpenDrawerClick

      expect(current).toEqual(expected)
    })
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
  })

  it('has SnNav', () => {
    const current = wrapper.find(SnNav)
    const expected = 1

    expect(current).toHaveLength(expected)
  })
})