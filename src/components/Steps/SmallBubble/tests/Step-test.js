import React from 'react'
import Step from './../Step'
import Steps from './../index'
import { shallow } from 'enzyme'

describe('Steps Bubble Item', () => {
  const label = 'Endereço'
  const wrapper = shallow (
    <Step label={label} />
  )

  it('is a li element', () => {
    const current = wrapper.find('li')

    expect(current.length).toEqual(1)
  })

  it('has label', () => {
    const current = wrapper.text()
    const expected = label

   expect(current).toEqual(expected)
  })

  it('has not active class', () => {
    const current = wrapper.hasClass('is-active')

    expect(current).toBeFalsy()
  })

  it('has active class', () => {
    wrapper.setProps({ status: 'active' })
    const current = wrapper.hasClass('is-active')

    expect(current).toBeTruthy()
  })
})
