import React from 'react'
import Input from './../index'
import Label from './../../Label'
import Meter from './../../Meter'
import Tooltip from './../../Tooltip'
import { shallow } from 'enzyme'

describe('Input', () => {
  const onChange = jest.fn()
  const wrapper = shallow(<Input onChange={onChange} />)

  it('has an input class', () => {
    const expected = 'sn-input'

    expect(wrapper.hasClass(expected)).toBeTruthy()
  })

  it('has id', () => {
    const expected = 'some-id'
    wrapper.setProps({ id: expected })
    const current = wrapper.find('input').props().id

    expect(current).toEqual(expected)
  })

  it('has a label', () => {
    const expected = 'Some label here'
    wrapper.setProps({ label: expected })
    const current = wrapper.find(Label).props().value

    expect(current).toEqual(expected)
  })

  it('is fixed in label', () => {
    wrapper.setProps({ fixed: true })
    const current = wrapper.find(Label).props().fixed

    expect(current).toBeTruthy()
  })

  it('has htmlFor in label', () => {
    const current = wrapper.find(Label).props().htmlFor
    const expected = 'some-id'

    expect(current).toEqual(expected)
  })

  it('is not required', () => {
    expect(wrapper.props().required).toBeFalsy()
  })

  it('is required', () => {
    wrapper.setProps({ required: true })

    expect(wrapper.find('input').props().required).toBeTruthy()
  })

  it('is autoFocus', () => {
    wrapper.setProps({ autoFocus: true })

    expect(wrapper.find('input').props().autoFocus).toBeTruthy()
  })

  it('has name', () => {
    const expected = 'Some name'
    wrapper.setProps({ name: expected })
    const current = wrapper.find('input').props().name

    expect(current).toEqual(expected)
  })

  it('has type', () => {
    const expected = 'number'
    wrapper.setProps({ type: expected })
    const current = wrapper.find('input').props().type

    expect(current).toEqual(expected)
  })

  it('has tabIndex', () => {
    const expected = 2
    wrapper.setProps({ tabIndex: expected })
    const current = wrapper.find('input').props().tabIndex

    expect(current).toEqual(expected)
  })

  it('has meter', () => {
    wrapper.setProps({ meter: true })

    expect(wrapper.find(Meter).length).toEqual(1)
  })

  it('has info', () => {
    const expected = 'Some info'
    wrapper.setProps({ info: expected })
    const current = wrapper.find(Tooltip).props().message

    expect(current).toEqual(expected)
  })

  it('has left addon string', () => {
    const expected = 'R$'
    wrapper.setProps({ leftAddon: expected })
    const current = wrapper.find('.sn-input__addon')

    expect(current.contains(expected)).toBeTruthy()
  })

  it('has left addon', () => {
    const expected = 20
    wrapper.setProps({ leftAddon: expected })
    const current = wrapper.find('.sn-input__addon')

    expect(current.contains(expected)).toBeTruthy()
  })

  it('has right addon', () => {
    const expected = '%'
    wrapper.setProps({ rightAddon: expected })
    const current = wrapper.find('.sn-input__addon')

    expect(current.contains(expected)).toBeTruthy()
  })

  it('has value', () => {
    const expected = 'Some value'
    wrapper.setProps({ value: expected })
    const current = wrapper.find('input').props().value

    expect(current).toEqual(expected)
  })

  it('updates state value', () => {
    const expected = 'Some value'
    const current = wrapper.state().value

    expect(current).toEqual(expected)
  })

  it('has error', () => {
    const expected = 'Some error'
    wrapper.setProps({ error: expected })
    const current = wrapper.find('.sn-form-group__message').text()

    expect(current).toEqual(expected)
  })

  it('has error class', () => {
    const expected = 'has-error'

    expect(wrapper.hasClass(expected)).toBeTruthy()
  })

  it('has className', () => {
    const expected = 'Some class'
    wrapper.setProps({ className: expected })

    expect(wrapper.hasClass(expected)).toBeTruthy()
  })

  it('calls on change', () => {
    const expected = 'Some new value'
    wrapper
      .find('input')
      .props()
      .onChange({ target: { value: expected }, persist: jest.fn() })

    expect(onChange).toBeCalled()
  })
})
