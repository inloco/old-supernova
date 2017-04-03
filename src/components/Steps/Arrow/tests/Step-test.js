import React from 'react'
import Step from './../Step'
import { shallow } from 'enzyme'

describe('Steps Arrow Item', () => {
  const wrapper = shallow (
    <Step label="Informações Gerais" index={0} />
  )

  it('has label', () => {
    const expectedLabel = 'Informações Gerais'

   expect(wrapper.contains(expectedLabel)).toBeTruthy()
  })

  it('has not status class', () => {
    expect(wrapper.hasClass('is-active')).toBeFalsy()
  })

  it('has active class', () => {
    wrapper.setProps({ status: 'active' })

    expect(wrapper.hasClass('is-active')).toBeTruthy()
  })

  it('has sn-steps__item class', () => {
    expect(wrapper.hasClass('sn-steps__item')).toBeTruthy()
  })

  it("has icon with correct number", () => {
    const expectedIconNumber = '1'
    const currentIconNumber = wrapper.find('i').text()

    expect(currentIconNumber).toEqual(expectedIconNumber)
  })

  describe('the step is done', () => {
    it('has done class', () => {
      wrapper.setProps({ status: 'done' })

      expect(wrapper.hasClass('is-done')).toBeTruthy()
    })
  
    it("has material icons class", () => {
      expect(wrapper.find('i').hasClass('material-icons')).toBeTruthy()
    })

    it("has icon with correct number", () => {
      const expectedIconNumber = 'done'
      const currentIconNumber = wrapper.find('i').text()

      expect(currentIconNumber).toEqual(expectedIconNumber)
    })
  })
})
