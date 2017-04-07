import React from 'react'
import TableRow from './../Row'
import { shallow } from 'enzyme'

describe('TableRow', () => {
  const wrapper = shallow(
    <TableRow>
      <td>Some</td>
    </TableRow>
  )

  it('is a tr', () => {
    const tr = wrapper.find('tr')

    expect(tr.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })

  describe('when head', () => {
    it('is not seted it not have head className', () => {
      const element = wrapper.find('.sn-table__header')

      expect(element.length).toEqual(0)
    })

    it('is seted it has head className', () => {
      wrapper.setProps({ head: true })

      const element = wrapper.find('.sn-table__header')

      expect(element.length).toEqual(1)
    })
  })
})