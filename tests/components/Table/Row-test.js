import React from 'react'
import TableRow from './../../../src/components/Table/Row'
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

  describe('when header', () => {
    it('is not seted it not have header className', () => {
      const trWithHeaderClassName = wrapper.find('.sn-table__header')

      expect(trWithHeaderClassName.length).toEqual(0)
    })

    it('is seted it has header className', () => {
      wrapper.setProps({ header: true })

      const trWithHeaderClassName = wrapper.find('.sn-table__header')

      expect(trWithHeaderClassName.length).toEqual(1)
    })
  })
})