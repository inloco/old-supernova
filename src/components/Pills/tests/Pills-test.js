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
    expect(wrapper.hasClass('sn-pills')).toBeTruthy()
  })

  it('has 3 pill items', () => {
    const items = wrapper.find('[className="sn-pills__label"]')

    expect(items.length).toEqual(3)
  })

  it('has the first pill input checked', () => {
    const first = wrapper.find('[className="sn-pills__label"]').first()
    const input = first.find('input')

    expect(input.props().defaultChecked).toBeTruthy()
  })
  
  it('has pills inputs with the same name', () => {
    const inputs = wrapper.find('input')

    for(let input of inputs) {
      expect(input.name).toEqual('lala')
    }
  })
})