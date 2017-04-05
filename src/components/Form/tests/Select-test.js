import React from 'react'
import Select from './../Select'
import Tooltip from './../../Tooltip'
import { shallow } from 'enzyme'

describe('Select', () => {
  const onChange = jest.fn()
  const wrapper = shallow(
    <Select onChange={onChange}>
      <option value="">A</option>
      <option value="">B</option>
    </Select>
  )

  it('has two options', () => {
    expect(wrapper.find('option')).toHaveLength(2)
  })

  it('calls onChange', () => {
    wrapper.find('select').simulate('change')

    expect(onChange).toBeCalled()
  })

  describe('when have info', () => {
    beforeEach(() => {
      wrapper.setProps({ info: 'some' })
    })

    it('has tooltip', () => {
      expect(wrapper.find(Tooltip)).toHaveLength(1)
    })

    it('has tooltip with message', () => {
      expect(wrapper.find(Tooltip).props().message).toEqual('some')
    })
  })
})
