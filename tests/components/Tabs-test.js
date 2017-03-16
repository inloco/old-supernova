import React from 'react'
import Tabs from './../../src/components/Tabs/Main'
import Tab from './../../src/components/Tabs/Tab'
import { mount } from 'enzyme'
import { isShowingContent, isActive } from './../utils/tabs'

describe('Tabs', () => {
  const wrapper = mount(
    <Tabs>
      <Tab label="Opção A">
        <div className="sn-grid--bleed-top">Conteúdo de A</div>
      </Tab>
      <Tab label="Opção B">
        <div className="sn-grid--bleed-top">Conteúdo de B</div>
      </Tab>
    </Tabs>
  )

  it('has the second tab with active class', () => {
    wrapper.setProps({ active: 1 })
    const currentTab = wrapper.find('.sn-tabs li').last()

    isActive(currentTab)
  })

  it('shows the second content tab', () => {
    const expectedContent = 'Conteúdo de B'
    const currentTab = wrapper.find(Tab).last()

    isShowingContent(currentTab, expectedContent)
  })

  describe('when change to the first tab', () => {
    it('has the first tab with active class', () => {
      wrapper.setProps({ active: 0 })
      const currentTab = wrapper.find('.sn-tabs li').first()

      isActive(currentTab)
    })

    it('shows the first tab content', () => {
      const expectedContent = 'Conteúdo de A'
      const currentTab = wrapper.find(Tab).first()

      isShowingContent(currentTab, expectedContent)
    })
  })
})
