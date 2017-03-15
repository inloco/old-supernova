import React from 'react'
import Grid from './../Main'
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

  describe('grid type', () => {
    it('is a horizontal type', () => {
      const grid = wrapper.find('.sn-grid--horizontal')

      expect(grid.length).toEqual(1)
    })

    it('is a vertical type', () => {
      wrapper.setProps({ vertical: true })
      const grid = wrapper.find('.sn-grid--vertical')

      expect(grid.length).toEqual(1)
    })

    it('is a horizontal reverse type', () => {
      wrapper.setProps({ vertical: false, reverse: true })
      const grid = wrapper.find('.sn-grid--horizontal-reverse')

      expect(grid.length).toEqual(1)
    })

    it('is a vertical reverse type', () => {
      wrapper.setProps({ vertical: true })
      const grid = wrapper.find('.sn-grid--vertical-reverse')

      expect(grid.length).toEqual(1)
    })
  })

  describe('responsive', () => {
    it('is mobile-threshold responsive', () => {
      wrapper.setProps({ responsive: 'mobile-threshold' })
      const grid = wrapper.find('.sn-grid--responsive-mobile-threshold')

      expect(grid.length).toEqual(1)
    })
  })

  describe('bleed', () => {
    it('is bleed', () => {
      wrapper.setProps({ bleed: true })
      const grid = wrapper.find('.sn-grid--cell-bleed')

      expect(grid.length).toEqual(1)
    })

    it('is sm bleed', () => {
      wrapper.setProps({ bleed: 'sm' })
      const grid = wrapper.find('.sn-grid--cell-bleed-sm')

      expect(grid.length).toEqual(1)
    })
  })

  describe('gutter', () => {
    it('is gutter', () => {
      wrapper.setProps({ gutter: true })
      const grid = wrapper.find('.sn-grid--cell-gutter')

      expect(grid.length).toEqual(1)
    })

    it('is xs gutter', () => {
      wrapper.setProps({ gutter: 'xs' })
      const grid = wrapper.find('.sn-grid--cell-gutter-xs')

      expect(grid.length).toEqual(1)
    })
  })

  describe('padding', () => {
    it('is padding', () => {
      wrapper.setProps({ padding: true })
      const grid = wrapper.find('.sn-grid--cell-padding')

      expect(grid.length).toEqual(1)
    })

    it('is sm padding', () => {
      wrapper.setProps({ padding: 'sm' })
      const grid = wrapper.find('.sn-grid--cell-padding-sm')

      expect(grid.length).toEqual(1)
    })
  })

  describe('wrap', () => {
    it('is wrap', () => {
      wrapper.setProps({ wrap: true })
      const grid = wrapper.find('.sn-grid--cell-wrap')

      expect(grid.length).toEqual(1)
    })

    it('is reverse wrap', () => {
      wrapper.setProps({ wrap: 'reverse' })
      const grid = wrapper.find('.sn-grid--cell-wrap-reverse')

      expect(grid.length).toEqual(1)
    })

    it('is nowrap', () => {
      wrapper.setProps({ wrap: 'nowrap' })
      const grid = wrapper.find('.sn-grid--cell-nowrap')

      expect(grid.length).toEqual(1)
    })
  })

  describe('wrap', () => {
    it('is wrap', () => {
      wrapper.setProps({ wrap: true })
      const grid = wrapper.find('.sn-grid--cell-wrap')

      expect(grid.length).toEqual(1)
    })

    it('is reverse wrap', () => {
      wrapper.setProps({ wrap: 'reverse' })
      const grid = wrapper.find('.sn-grid--cell-wrap-reverse')

      expect(grid.length).toEqual(1)
    })

    it('is nowrap', () => {
      wrapper.setProps({ wrap: 'nowrap' })
      const grid = wrapper.find('.sn-grid--cell-nowrap')

      expect(grid.length).toEqual(1)
    })
  })

  describe('align', () => {
    it('is left align', () => {
      wrapper.setProps({ align: 'start' })
      const grid = wrapper.find('.sn-grid--align-start')

      expect(grid.length).toEqual(1)
    })
  })

  describe('alignJustify', () => {
    it('is left alignJustify', () => {
      wrapper.setProps({ alignJustify: 'left' })
      const grid = wrapper.find('.sn-grid--justify-left')

      expect(grid.length).toEqual(1)
    })
  })

  describe('alignContent', () => {
    it('is start alignContent', () => {
      wrapper.setProps({ alignContent: 'start' })
      const grid = wrapper.find('.sn-grid--content-start')

      expect(grid.length).toEqual(1)
      console.log('-->', wrapper.debug())
    })
  })
})
