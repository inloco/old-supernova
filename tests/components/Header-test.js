import { shallow } from 'enzyme'
import React from 'react'
import Header from './../../src/components/Header'

describe("Header", () => {
  const wrapper = shallow(<Header
                          title="Some section"
                          subtitle="Second section" />)

  it("has header class", () => {
    const currentHeader = wrapper.find(".sn-layout__header")

    expect(currentHeader.length).toEqual(1)
  })

  it("has 'Some section' cotent", () => {
    const currentTitle = wrapper.find(".sn-layout__title")

    expect(currentTitle.text()).toEqual("Some section")
  })

  it("has 'Second section' cotent", () => {
    const currentSubtitle = wrapper.find(".sn-layout__subtitle")

    expect(currentSubtitle.text()).toEqual("Second section")
  })

  it("has drawer button", () => {
    const currentDrawerButton = wrapper.find(".sn-layout__drawer-button")

    expect(currentDrawerButton.length).toEqual(1)
  })
})
