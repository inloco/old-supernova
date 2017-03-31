import React from 'react'
import Steps from './../index'
import Step from './../Step'
import { shallow } from 'enzyme'

describe('Steps Arrow', () => {
  const wrapper = shallow(
    <Steps activeStep={1}>
      <Step label="Informações Gerais" />
      <Step label="Endereço" />
    </Steps>
  )

  it('has steps class', () => {
    expect(wrapper.hasClass('sn-steps')).toBeTruthy()
  })

  it('has children', () => {
    expect(wrapper.children().length).toBeGreaterThan(0)
  })

  it('is raised', () => {
    wrapper.setProps({ raised: true })

    expect(wrapper.hasClass('sn-steps--raised')).toBeTruthy()
  })

  it('has the first step as done', () => {
    const currentStepStatus = wrapper.find(Step).first().props().status

    expect(currentStepStatus).toEqual('done')
  })

  it('has the second step as active', () => {
    const currentStepStatus = wrapper.find(Step).last().props().status

    expect(currentStepStatus).toEqual('active')
  })
})
