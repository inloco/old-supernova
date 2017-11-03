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
    const current = wrapper.find('div').first().hasClass('sn-alert')

    expect(current).toBeTruthy()
  })

  it('has correct default type', () => {
    const current = wrapper.find('div').first().hasClass('sn-alert--success')

    expect(current).toBeTruthy()
  })

  describe('false properties', () => {
    it('active false has hidden class', () => {
      wrapper.setProps({ active: false })

      const current = wrapper.find('div').first().hasClass('sn-alert-hidden')

      expect(current).toBeTruthy()
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
