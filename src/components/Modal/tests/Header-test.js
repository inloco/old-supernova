import React from 'react'
import Header from './../Header'
import { shallow } from 'enzyme'

describe('Modal', () => {
  const onClose = jest.fn()
  let wrapper = shallow(
      <Header onClose={onClose} title="I am the title!"/>)

  it('has Header modal class', () => {
    expect(wrapper.hasClass('sn-modal__header')).toBeTruthy()
  })

  it('Header has one button', () => {
    const button = wrapper.find('[className="sn-modal__header__close-button"]')

    expect(button.length).toEqual(1)
  })

  it('Header has one span', () => {
    const span = wrapper.find('[className="sn-modal__header__title"]')

    expect(span.length).toEqual(1)
  })

  describe('empty title', () => {
    it('has no title', () => {
      wrapper.setProps({ title: undefined })
      const span = wrapper.find('[className="sn-modal__header__title"]')

      expect(span.props().children).toEqual(undefined)
    })
  })

  describe('when has className prop', () => {
    const customClass = 'custom-class'
    wrapper.setProps({ className: customClass })

    it('has custom class', () => {
      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })
})