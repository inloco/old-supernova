import React from 'react'
import Collapsible from './../index'
import Item from './../Item'
import { shallow, mount } from 'enzyme'

const title = 'Title'
const content = 'Content'

const buildCollapsibleTemplate = (props = {}) => (
  <Collapsible {...props}>
    <Item title={title} content={content} />
    <Item title={title} content={content} />
    <Item title={title} content={content} />
  </Collapsible>
)

describe('Collapsible', () => {
  it('calls onItemClick when opening items', () => {
    const spy = spyOn(Collapsible.prototype, 'onItemClick')
    spy.calls.track()

    const wrapper = mount(buildCollapsibleTemplate())

    // Default item opening
    expect(Collapsible.prototype.onItemClick.calls.count()).toBe(1)

    const itemButton = wrapper.children().first().find('.sn-collapsible__item__header__toggle-button').first()
    itemButton.simulate('click')

    expect(Collapsible.prototype.onItemClick.calls.count()).toBe(2)
  })

  describe('when is instantiated', () => {
    const wrapper = mount(buildCollapsibleTemplate())

    it('has default class', () => {
      expect(wrapper.hasClass('sn-collapsible')).toBeTruthy()
    })

    it('opens and closes clicked items', () => {
      const itemButton = wrapper.children().last().find('.sn-collapsible__item__header__toggle-button').first()

      itemButton.simulate('click')

      expect(wrapper.find('.sn-collapsible__item--open').length).toBe(2)

      itemButton.simulate('click')

      expect(wrapper.find('.sn-collapsible__item--open').length).toBe(1)
    })
  })

  describe('when has className props', () => {
    const wrapper = shallow(buildCollapsibleTemplate())

    beforeEach(() => {
      wrapper.setProps({className: 'custom-class'})
    })

    it('has custom class', () => {
      expect(wrapper.hasClass('custom-class')).toBeTruthy()
    })
  })

  describe('when has accordion props', () => {
    const accordionWrapper = mount(buildCollapsibleTemplate({accordion: true}))

    it('can have only one item open at once', () => {
      expect(accordionWrapper.find('.sn-collapsible__item--open').length).toBe(1)

      const itemButton = accordionWrapper.children().last().find('.sn-collapsible__item__header__toggle-button').first()
      itemButton.simulate('click')

      expect(accordionWrapper.find('.sn-collapsible__item--open').length).toBe(1)
    })
  })

  describe('when has borderless props', () => {
    const borderlessWrapper = mount(buildCollapsibleTemplate({borderless: true}))

    it('all child items should have borderless class', () => {
      expect(borderlessWrapper.find('.sn-collapsible__item--borderless').length).toBe(3)
    })
  })

  describe('when has activeKey prop', () => {
    const activeKeyWrapper = mount(buildCollapsibleTemplate({activeKey: ['1', '2']}))

    it('mantains the respective items open regardless of clicks', () => {
      const firstItem = activeKeyWrapper.children().first()
      const itemButton = firstItem.find('.sn-collapsible__item__header__toggle-button').first()

      expect(firstItem.hasClass('sn-collapsible__item--open')).toBeFalsy()
      expect(activeKeyWrapper.find('.sn-collapsible__item--open').length).toBe(2)

      itemButton.simulate('click')

      expect(firstItem.hasClass('sn-collapsible__item--open')).toBeFalsy()
      expect(activeKeyWrapper.find('.sn-collapsible__item--open').length).toBe(2)
    })
  })
})