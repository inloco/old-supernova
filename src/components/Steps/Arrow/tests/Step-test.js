import React from 'react'
import Step from './../Step'
import Steps from './../index'
import { mount } from 'enzyme'

describe('Steps Arrow Item', () => {
  const wrapper = mount (
    <Steps activeStep={1}>
      <Step label="Informações Gerais"/>
      <Step label="Endereço" />
    </Steps>
  )

  it('has steps done item class', () => {
    const item = wrapper.find('[className="sn-steps__item is-done"]')

    expect(item.children().length).toEqual(1)
  })

  it('has setps active item class', () => {
    const item = wrapper.find('[className="sn-steps__item is-active"]')
    
    expect(item.children().length).toEqual(1)
  })

  it("has icon with correct number", () => {
    const item = wrapper.find('[className="sn-steps__item is-done"]')
    const i = item.find('i')

    expect(i.text()).toEqual("done")
  })

  it("has label", () => {
    const item = wrapper.find('[className="sn-steps__item is-done"]')

    expect(item.text().includes("Informações Gerais")).toBeTruthy()
  })
})
