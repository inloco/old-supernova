import React from 'react'
import Alert from '../index'
import { mount } from 'enzyme'

jest.useRealTimers()

describe('Alert', () => {
  const onClose = jest.fn()
  const wrapper = mount(
    <Alert
      onClose={onClose}
      message="Some message here"
      active={true}
      closeAfter={2000}
    />
  )

  beforeEach(() => onClose.mockClear())

  it('will be close after 2 seconds', (done) => {
    wrapper.setProps({ active: true })
    setTimeout(() => {
      expect(onClose).toBeCalled()
      done()
    }, 2000)
  })

  it('will be close after click in close button', () => {
    wrapper.find('button').simulate('click')

    expect(onClose).toBeCalled()
  })

  it('has alert class', () => {
    expect(wrapper.hasClass('sn-alert')).toBeTruthy()
  })

  it('has correct default type', () => {
    expect(wrapper.hasClass('sn-alert--success')).toBeTruthy()
  })

  describe('false properties', () => {
    it('active false has hidden class', () => {
      wrapper.setProps({ active: false })
      const div = wrapper.find('div')

      expect(wrapper.hasClass('sn-alert-hidden')).toBeTruthy()
    })

    it('not call function', () => {
      wrapper.setProps({
        closeAfter: undefined,
        active: true 
      })
     
      setTimeout(() => {
        expect(onClose).not.toBeCalled()
        done()
      }, 2000)
    })

    it('no icon rendered', () => {
      wrapper.setProps({ icon: undefined })

      expect(wrapper.find('.sn-alert--icon').length).toEqual(1)
    })
  })
})
