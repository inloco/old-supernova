import React from 'react'
import Modal from "../../../src/components/Modal/Main"
import { shallow } from 'enzyme'

describe('Modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Modal size="sm">
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
    expect(wrapper.find('.sn-modal').hasClass('sn-modal--sm')).toBeTruthy()
  })

  it('starts close', () => {
    expect(wrapper.state().open).toBeFalsy()
  })

  it('dont shows the backdrop', () => {
    expect(wrapper.find('.sn-modal__backdrop').length).toEqual(0)
  })

  describe('when is open', () => {
    beforeEach(() => {
      wrapper.setState({ open: true })
    })

    it('shows the backdrop', () => {
      expect(wrapper.find('.sn-modal__backdrop').length).toEqual(1)
    })
  })
})