import React from 'react'
import Grid from './../../src/components/Grid'
import { shallow } from 'enzyme'

describe('Grid', () => {
  const wrapper = shallow(
    <Grid>
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
})
