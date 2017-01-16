import React from 'react'
import Cell from './../../../src/components/Table/Cell'
import { shallow } from 'enzyme'

describe('Cell', () => {
  const wrapper = shallow(
    <Cell>Some</Cell>
  )

  it('is a td', () => {
    const td = wrapper.find('td')

    expect(td.length).toEqual(1)
  })

  it('is a th', () => {
    wrapper.setProps({ head: true })

    const th = wrapper.find('th')

    expect(th.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })
})