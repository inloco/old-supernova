import React from 'react'
import Step from './../Step'
import Steps from './../index'
import { shallow } from 'enzyme'

describe('Steps Bubble Item', () => {
  const wrapper = shallow (
    <Step label="Endereço" />
  )

  it('is a li element', () => {
    const currentElement = wrapper.find('li')

    expect(currentElement.length).toEqual(1)
  })

  it('has label', () => {
    const expectedLabel = 'Endereço'
    const currentLabel = wrapper.text()

   expect(currentLabel).toEqual(expectedLabel)
  })

  it('has not active class', () => {
    expect(wrapper.hasClass('is-active')).toBeFalsy()
  })

  it('has active class', () => {
    wrapper.setProps({ status: 'active' })

    expect(wrapper.hasClass('is-active')).toBeTruthy()
  })
})
