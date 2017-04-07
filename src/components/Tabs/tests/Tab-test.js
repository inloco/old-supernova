import React from 'react'
import Tab from './../Tab'
import { shallow } from 'enzyme'

describe('Tabs', () => {
  const wrapper = shallow(
    <Tab label="Opção A">
      <div>Conteúdo de A</div>
    </Tab>
  )

  it('has children', () => {
    expect(wrapper.props().children).not.toBe(undefined)
  })

  it('is not active', () => {
    const expectedStyle = { display: 'none' }
    const currentStyle = wrapper.props().style

    expect(currentStyle).toEqual(expectedStyle)
  })

  it('is active', () => {
    wrapper.setProps({ active: true })
    const expectedStyle = { display: 'block' }
    const currentStyle = wrapper.props().style

    expect(currentStyle).toEqual(expectedStyle)
  })
})
