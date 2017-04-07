import React from 'react'
import TableHead from './../Head'
import { shallow } from 'enzyme'

describe('TableHead', () => {
  const wrapper = shallow(
    <TableHead>
      <th>Some</th>
    </TableHead>
  )

  it('is a thead', () => {
    const th = wrapper.find('thead')

    expect(th.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})