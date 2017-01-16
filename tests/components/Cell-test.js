import React from 'react'
import Cell from './../../src/components/Cell'
import { shallow } from 'enzyme'

describe('Cell', () => {
  const wrapper = shallow(
    <Cell>
      <h1>Cell</h1>
    </Cell>
  )

  it('has Cell', () => {
    const cell = wrapper.find('.sn-cell--auto')

    expect(cell.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  describe('when size', () => {
    it('is not seted it have auto value', () => {
      const cellWithSize = wrapper.find('.sn-cell--auto')

      expect(cellWithSize.length).toEqual(1)
    })

    it('is seted it have the size value', () => {
      wrapper.setProps({ size: 2 })

      const cellWithSize = wrapper.find('.sn-cell--2')

      expect(cellWithSize.length).toEqual(1)
    })
  })
})