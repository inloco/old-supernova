import React from 'react'
import Steps from './../index'
import Step from './../Step'
import { shallow } from 'enzyme'

describe('Steps Small Bubble', () => {
  const firstLabel = 'Informações Gerais'
  const secondLabel = 'Endereço'

  const wrapper = shallow(
    <Steps activeStep={1}>
      <Step label={firstLabel} />
      <Step label={secondLabel} />
    </Steps>
  )

  it('has small bubble steps class', () => {
    const current = wrapper.hasClass('sn-steps__small-bubble')

    expect(current).toBeTruthy()
  })

  it('has 2 children', () => {
    const current = wrapper.find('ul').children().length
    const expected = 2

    expect(current).toEqual(2)
  })

  describe('first step', () => {
    it('has as done', () => {
      const current = wrapper.find(Step).first().props().status
      const expected = 'done'

      expect(current).toEqual(expected)
    })

    it('has label', () => {
      const current = wrapper.find(Step).first().props().label
      const expected = firstLabel

      expect(current).toEqual(expected)
    })
  })

  describe('second step', () => {
    it('has as done', () => {
      const current = wrapper.find(Step).last().props().status
      const expected = 'active'

      expect(current).toEqual(expected)
    })

    it('has label', () => {
      const current = wrapper.find(Step).last().props().label
      const expected = secondLabel

      expect(current).toEqual(expected)
    })
  })
})
