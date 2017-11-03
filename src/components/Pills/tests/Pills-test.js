import { shallow, mount } from 'enzyme'
import React from 'react'
import Pills from './../index'
import Pill from './../Pill'

describe('Pills', () => {
  const wrapper = mount(
      <Pills name="lala">
        <Pill label="Item 1" value="zoombie"/>
        <Pill label="Item 2" value="automatic"/>
        <Pill label="Item 3" value="manually"/>
      </Pills>)

  it('has pills className', () => {
    const current = wrapper.find('div').hasClass('sn-pills')

    expect(current).toBeTruthy()
  })

  it('has 3 pill items', () => {
    const current = wrapper.find(Pill)

    expect(current).toHaveLength(3)
  })

  it('has the first pill input checked', () => {
    const first = wrapper.find('[className="sn-pills__label"]').first()
    const span = first.find('span')

    expect(span.props().className).toEqual('sn-pills__label--content active')
  })

  it('has pills inputs with the same name', () => {
    const inputs = wrapper.find('input')

    for(let input of inputs) {
      expect(input.props.name).toEqual('lala')
    }
  })
})
