import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Icon from '../index'
import { shallow } from 'enzyme'

describe('Icon', () => {
  const wrapper = shallow(
    <Icon code="add"/>
  )

  it('has icon className', () => {
    const icon = wrapper.find('[className="material-icons"]')

    expect(icon.length).toEqual(1)
  })

  it('has material code', () => {
    expect(wrapper.children().node).toEqual('add')
  })
})
