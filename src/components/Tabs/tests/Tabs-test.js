import React from 'react'
import Tabs from './../index'
import Tab from './../Tab'
import { mount } from 'enzyme'
import { isShowingContent, isActive } from './../helper'

describe('Tabs', () => {
  describe('Simple behavior', () => {
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

    it('has children', () => {
      expect(wrapper.props().children).not.toBe(undefined)
    })

    it('has the first tab with active class', () => {
      const currentTab = wrapper.find('.sn-tabs li').first()

      isActive(currentTab)
    })

    it('shows the first tab content', () => {
      const expectedContent = 'Conteúdo de A'
      const currentTab = wrapper.find(Tab).first()

      isShowingContent(currentTab, expectedContent)
    })

    describe('when click the second tab', () => {
      beforeEach(() => {
        wrapper.find('.sn-tabs li a').last().simulate('click')
      })

      it('has the second tab with active class', () => {
        const currentTab = wrapper.find('.sn-tabs li').last()

        isActive(currentTab)
      })

      it('shows the second content tab', () => {
        const expectedContent = 'Conteúdo de B'
        const currentTab = wrapper.find(Tab).last()

        isShowingContent(currentTab, expectedContent)
      })
    })
  })

  describe('Custom behavior', () => {
    const wrapper = mount(
      <Tabs customBehavior>
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
})
