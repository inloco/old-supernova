import React from 'react'
import Table from './../index'
import { shallow } from 'enzyme'

describe('Table', () => {
  const wrapper = shallow(
    <Table>
      <tbody>Some</tbody>
    </Table>
  )

  it('is a table', () => {
    const table = wrapper.find('.sn-table')

    expect(table.length).toEqual(1)
  })

  it('has children', () => {
    const children = wrapper.children()

    expect(children).not.toBe(undefined)
  })

  it('has className', () => {
    wrapper.setProps({ className: 'someClass' })

    expect(wrapper.hasClass('someClass')).toBeTruthy()
  })

  it('is stripped', () => {
    wrapper.setProps({ stripped: true })

    expect(wrapper.hasClass('sn-table--stripped')).toBeTruthy()
  })

  it('is bordered', () => {
    wrapper.setProps({ bordered: true })

    expect(wrapper.hasClass('sn-table--bordered')).toBeTruthy()
  })

  it('is flat', () => {
    wrapper.setProps({ flat: true })

    expect(wrapper.hasClass('sn-table--flat')).toBeTruthy()
  })

  it('is onlyContent', () => {
    wrapper.setProps({ onlyContent: true })

    expect(wrapper.hasClass('sn-table--only-content')).toBeTruthy()
  })

  it('has style', () => {
    wrapper.setProps({ style: { color: '#000' } })
    const expectedStyle = { color: '#000' }
    const currentStyle = wrapper.props().style

    expect(currentStyle).toEqual(expectedStyle)
  })
})