import React from 'react'
import Table from './../../../src/components/Table'
import { shallow } from 'enzyme'

describe('Table', () => {
  const wrapper = shallow(
    <Table>
      <tbody>Some</tbody>
    </Table>
  )

  it('is a table', () => {
    const table = wrapper.find('table.sn-table')

    expect(table.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})