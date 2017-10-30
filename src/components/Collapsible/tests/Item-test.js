import React from 'react'
import Item from './../Item'
import { shallow } from 'enzyme'

describe('Item', () => {
  const title = 'Title'
  const content = 'Content'
  const wrapper = shallow(
    <Item title={title} content={content} />
  )

  it('has default class', () => {
    expect(wrapper.hasClass('sn-collapsible__item')).toBeTruthy()
  })

  it('has title', () => {
    expect(wrapper.find('.sn-collapsible__item__header__title').text()).toBe(title)
  })

  it('has content', () => {
    expect(wrapper.find('.sn-collapsible__item__content__inner').text()).toBe(content)
  })

  describe('receives borderless prop', () => {
    beforeEach(() => {
      wrapper.setProps({borderless: true})
    })

    it('has borderless class', () => {
      expect(wrapper.find('.sn-collapsible__item--borderless')).toBeTruthy()
    })
  })

  describe('receives disabled prop', () => {
    beforeEach(() => {
      wrapper.setProps({disabled: true})
    })

    it('has disabled class', () => {
      expect(wrapper.find('.sn-collapsible__item--disabled')).toBeTruthy()
    })
  })

  describe('receives isActive prop', () => {
    beforeEach(() => {
      wrapper.setProps({isActive: true})
    })

    it('has open class', () => {
      expect(wrapper.find('.sn-collapsible__item--open')).toBeTruthy()
    })
  })

  describe('receives header class prop', () => {
    beforeEach(() => {
      wrapper.setProps({headerClass: 'custom-class'})
    })

    it('has custom header class', () => {
      const headerWrapper = wrapper.find('.sn-collapsible__item__header').first()
      expect(headerWrapper.hasClass('custom-class')).toBeTruthy()
    })
  })

  describe('receives content class prop', () => {
    beforeEach(() => {
      wrapper.setProps({contentClass: 'custom-class'})
    })

    it('has custom content class', () => {
      const contentWrapper = wrapper.find('.sn-collapsible__item__content').first()
      expect(contentWrapper.hasClass('custom-class')).toBeTruthy()
    })
  })

  describe('calls custom function to handle dynamic content height on window resize', () => {
    it('calls custom resize handler function', () => {
      const onResizeSpy = spyOn(Item.prototype, 'onResize')
      onResizeSpy.calls.track()

      window.resizeTo(1000, 1000);

      expect(onResizeSpy.calls.count()).toBe(1)
    })
  })

  // test click dont occur when disabled
})