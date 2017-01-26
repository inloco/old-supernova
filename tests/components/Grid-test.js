import React from 'react'
import Grid from './../../src/components/Grid'
import { shallow } from 'enzyme'

describe('Grid', () => {
  const wrapper = shallow(
    <Grid bleed>
      <h1>Grid</h1>
    </Grid>
  )

  it('has Grid', () => {
    const grid = wrapper.find('.sn-grid')

    expect(grid.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  it('is bleed', () => {
    expect(wrapper.find('.sn-grid--bleed-all').length).toEqual(1)
  })

  describe('when has not vertical props', () => {
    it('has horizontal className', () => {
      const gridWithHorizontal = wrapper.find('.sn-grid--horizontal')

      expect(gridWithHorizontal.length).toEqual(1)
    })
  })

  describe('when has vertical props', () => {
    it('has vertical className', () => {
      wrapper.setProps({ vertical: true })

      const gridWithVertical = wrapper.find('.sn-grid--vertical')

      expect(gridWithVertical.length).toEqual(1)
    })
  })

  describe('when has gutter props', () => {
    it('uses default gutter class name', () => {
      wrapper.setProps({ gutter: true })

      expect(wrapper.find('.sn-grid--cell-gutter').length).toEqual(1)
    })

    it('uses gutter with option in class name', () => {
      wrapper.setProps({ gutter: 'xs' })

      expect(wrapper.find('.sn-grid--cell-gutter-xs').length).toEqual(1)
    })
  })
})
