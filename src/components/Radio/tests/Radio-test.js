import React from 'react'
import Radio from './../index'
import { shallow } from 'enzyme'

describe('Radio', () => {
  const onChange = jest.fn()
  const wrapper = shallow(
    <Radio
      value={1}
      onChange={onChange}
      numeric
      label='Some value'
    />
  )

  it('has radio class', () => {
    expect(wrapper.hasClass('sn-radio')).toBeTruthy()
  })

  it('has label', () => {
    const current = wrapper.find('label').text()
    const expected = 'Some value'

    expect(current).toEqual(expected)
  })

  describe('when has numeric prop', () => {
    it('pass a numeric value in onChange', () => {
      const input = wrapper.find('input')

      input.props().onChange({ target: { value: '1' }})

      expect(onChange).toBeCalledWith(1)
    })
  })

  describe('when has disabled prop', () => {
    beforeEach(() => {
      wrapper.setProps({disabled: true})
    })

    it('has disabled class', () => {
      expect(wrapper.hasClass('sn-radio--disabled')).toBeTruthy()
    })
  })
})