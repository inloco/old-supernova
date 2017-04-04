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

  describe('styled table', () => {
    it('has sn-table--stripped class', () => {
      wrapper.setProps({ stripped: true })
      const table = wrapper.find('table')

      expect(table.props().className.includes('sn-table--stripped')).toBeTruthy()
    })

    it('has sn-table--bordered class', () => {
      wrapper.setProps({ bordered: true })
      const table = wrapper.find('table')

      expect(table.props().className.includes('sn-table--bordered')).toBeTruthy()
    })

    it('has sn-table--flat class', () => {
      wrapper.setProps({ flat: true })
      const table = wrapper.find('table')

      expect(table.props().className.includes('sn-table--flat')).toBeTruthy()
    })

    it('has sn-table--only-content class', () => {
      wrapper.setProps({ onlyContent: true })
      const table = wrapper.find('table')

      expect(table.props().className.includes('sn-table--only-content')).toBeTruthy()
    })
  })
})