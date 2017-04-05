import React from 'react'
import TableBody from './../Body'
import { shallow } from 'enzyme'

describe('TableBody', () => {
  const wrapper = shallow(
    <TableBody>
      <td>Some</td>
    </TableBody>
  )

  it('is a tbody', () => {
    const tbody = wrapper.find('tbody')

    expect(tbody.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})