import React from 'React'
import Radio from './../../src/components/Radio'
import { shallow } from 'enzyme'

describe('Radio', () => {
  const onChange = jest.fn()
  const wrapper = shallow(
    <Radio
      value={1}
      onChange={onChange}
      numeric
    />
  )

  it('has radio class', () => {
    expect(wrapper.hasClass('sn-radio')).toBeTruthy()
  })

  describe('when has numeric prop', () => {
    it('pass a numeric value in onChange', () => {
      const input = wrapper.find('input')

      input.props().onChange({ target: { value: '1' }})

      expect(onChange).toBeCalledWith(1)
    })
  })
})