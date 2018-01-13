import React from 'react'
import SnHeader from './../index'
import SnDrawerButton from './../../_Shared/SnDrawerButton'
import SnNav from './../../_Shared/SnNav'
import { shallow } from 'enzyme'

describe('SnHeader', () => {
  const handleOpenDrawerClick = jest.fn()
  const src = 'Src'
  const alt = 'Alt'
  const nav = <SnNav />
  const context = { handleOpenDrawerClick }
  const wrapper = shallow(
    <SnHeader nav={nav}>
      <div>Children</div>
    </SnHeader>,
    { context }
  )

  it('has specific class', () => {
    const current = wrapper.hasClass('sn-header')

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

  it('has SnNav', () => {
    const current = wrapper.find(SnNav)
    const expected = 1

    expect(current).toHaveLength(expected)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})