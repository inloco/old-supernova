import React from 'react'
import Cell from './../Cell'
import { shallow } from 'enzyme'

describe('Cell', () => {
  const wrapper = shallow(
    <Cell>
      <h1>Cell</h1>
    </Cell>
  )

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  describe('proportional size', () => {
    it('is 2 of size', () => {
      wrapper.setProps({ size: "2" })
      const cell = wrapper.find('.sn-cell--2')

      expect(cell.length).toEqual(1)
    })
  })

  describe('percentage size', () => {
    it('is 10 percent', () => {
      wrapper.setProps({ percent: "10" })
      const cell = wrapper.find('.sn-cell--10perc')

      expect(cell.length).toEqual(1)
    })
  })

  describe('fixed size', () => {
    it('is 1 fixed', () => {
      wrapper.setProps({ fixed: "1" })
      const cell = wrapper.find('.sn-cell--fixed-1')

      expect(cell.length).toEqual(1)
    })
  })

  describe('dynamic size', () => {
    it('is auto size', () => {
      wrapper.setProps({ dynamic: 'auto' })
      const cell = wrapper.find('.sn-cell--auto')

      expect(cell.length).toEqual(1)
    })
  })

  describe('padding', () => {
    it('is padding', () => {
      wrapper.setProps({ padding: true })
      const cell = wrapper.find('.sn-cell--padding')

      expect(cell.length).toEqual(1)
    })

    it('is sm padding', () => {
      wrapper.setProps({ padding: 'sm' })
      const cell = wrapper.find('.sn-cell--padding-sm')

      expect(cell.length).toEqual(1)
    })
  })

  describe('order', () => {
    it('is 1 order', () => {
      wrapper.setProps({ order: '1' })
      const cell = wrapper.find('.sn-cell--order-1')

      expect(cell.length).toEqual(1)
    })
  })

  describe('align', () => {
    it('is auto align', () => {
      wrapper.setProps({ align: 'auto' })
      const cell = wrapper.find('.sn-cell--item-auto')

      expect(cell.length).toEqual(1)
    })
  })

  describe('align content', () => {
    it('is left align content', () => {
      wrapper.setProps({ alignContent: 'left' })
      const cell = wrapper.find('.sn-cell--text-left')

      expect(cell.length).toEqual(1)
    })
  })

  describe('wrap', () => {
    it('break-word wrap', () => {
      wrapper.setProps({ wrap: 'break-word' })
      const cell = wrapper.find('.sn-cell--break-word')

      expect(cell.length).toEqual(1)
    })
  })

  describe('ellipsis', () => {
    it('is ellipsis', () => {
      wrapper.setProps({ ellipsis: true })
      const cell = wrapper.find('.sn-cell--ellipsis')

      expect(cell.length).toEqual(1)
    })
  })

  it('should pass "onClick" callback to root element', () => {
    const onClick = jest.fn()
    wrapper.setProps({ onClick })
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})