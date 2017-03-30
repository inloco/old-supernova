import React from 'react'
import Steps from './../index'
import Step from './../Step'
import { shallow } from 'enzyme'

describe("Steps Arrow", () => {
  const wrapper = shallow(
    <Steps activeStep={1}>
      <Step label="Informações Gerais"/>
      <Step label="Endereço" />
    </Steps>
  )

  it("has steps class", () => {
    expect(wrapper.props().className.includes("sn-steps")).toBeTruthy
  })

  it("has children", () => {
    expect(wrapper.children().length).toBeGreaterThan(0)
  })

  it("is raised", () => {
    wrapper.setProps({raised: true})
    expect(wrapper.props().className.includes("sn-steps sn-steps--raised")).toBeTruthy
  })
})
