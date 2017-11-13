import React from 'react'
import Modal from './../index'
import { shallow } from 'enzyme'

describe('Modal', () => {
  const onClose = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Modal onClose={onClose}>
        Some content
      </Modal>
    )
  })

  it('has an element with modal class', () => {
    expect(wrapper.find('.sn-modal').length).toEqual(1)
  })

  it('shows content correctly', () => {
    expect(wrapper.find('.sn-modal__content').text()).toEqual('Some content')
  })

  it('uses correct class for size', () => {
    wrapper.setProps({ size: "sm" })

    expect(wrapper.find('.sn-modal').hasClass('sn-modal--sm')).toBeTruthy()
  })

  it('starts close', () => {
    expect(wrapper.state().open).toBeFalsy()
  })

  it('dont shows the backdrop', () => {
    expect(wrapper.find('.sn-modal__backdrop').length).toEqual(0)
  })

  it('has correct id', () => {
    wrapper.setProps({ id: 1 })

    expect(wrapper.find('.sn-modal').props().id).toEqual(1)
  })

  describe('when click', () => {
    it('calls the onClick', () => {
      const modal = wrapper.find('.sn-modal')
      modal.simulate('click')

      expect(onClose).toBeCalled()
    })
  })

  describe('when is open', () => {
    beforeEach(() => {
      wrapper.setState({ open: true })
    })

    it('shows the backdrop', () => {
      expect(wrapper.find('.sn-modal__backdrop').length).toEqual(1)
    })
  })

  describe('when it is a dialog', () => {
    beforeEach(() => {
      wrapper.setProps({
        type: 'dialog',
        id: 1
      })
    })

    it('has dialog class', () => {
      const modal = wrapper.find('[id=1]')
      const expectedClasses = ['sn-modal', 'sn-modal--md',  'sn-modal--dialog']

      expect(expectedClasses.every(expectedClass => modal.hasClass(expectedClass))).toBeTruthy()
    })

    it('has dialog class when open', () => {
      wrapper.setProps({ open: true })
      const modal = wrapper.find('[id=1]')
      const expectedClasses = ['sn-modal', 'sn-modal--open', 'sn-modal--md', 'sn-modal--dialog']

      expect(expectedClasses.every(expectedClass => modal.hasClass(expectedClass))).toBeTruthy()
    })
  })

  describe('when has className prop', () => {
    const customClass = 'custom-class'
    beforeEach(() => {
      wrapper.setProps({ className: customClass })
    })

    it('has custom class', () => {
      expect(wrapper.find(`.${customClass}`).length).toEqual(1)
    })
  })

  describe('when it is vertically centered', () => {
    beforeEach(() => {
      wrapper.setProps({
        id: 'centered',
        centered: true
      })
    })

    it('has centered class', () => {
      const modal = wrapper.find('[id="centered"]')
      expect(modal.hasClass('sn-modal--centered')).toBeTruthy()
    })
  })

  describe('when it has no children', () => {
    beforeEach(() => {
      wrapper.setProps({
        open: true,
        children: [],
        id: 1
      })
    })

    it('has dialog class', () => {
      const content = wrapper.find('[className="sn-modal__content"]')
      expect(content.props().children.length).toEqual(0)
    })
  })
})
