import React from 'react'
import Button from './../index'
import { shallow } from 'enzyme'

describe('Button', () => {
  const fooFunc = jest.fn()

  const wrapper = shallow(
    <Button
      label='Login'
      raised
      theme='colored'
      type='submit'
      fullWidth
      onClick={fooFunc}
      size='1'
    />
  )

  it('has style', () => {
    expect(wrapper.hasClass('sn-button--colored')).toBeTruthy()
  })

  it('has type', () => {
    expect(wrapper.props().type).toEqual('submit')
  })

  it('has label', () => {
    expect(wrapper.text()).toEqual('Login')
  })

  it('is raised', () => {
    expect(wrapper.hasClass('sn-button--raised')).toBeTruthy()
  })

  it('is fullWidth', () => {
    expect(wrapper.hasClass('sn-button--full-width')).toBeTruthy()
  })

  it('has size', () => {
    expect(wrapper.hasClass('sn-button--1')).toBeTruthy()
  })

  it('is not disabled', () => {
    expect(wrapper.props().disabled).toBeFalsy
  })

  it('executes onClick props when it is click', () => {
    wrapper.simulate('click')

    expect(fooFunc).toBeCalled()
  })

  describe('when is disabled', () => {
    const wrapper = shallow(
      <Button label='Login' disabled />
    )

    it('is disabled', () => {
      expect(wrapper.props().disabled).toBeTruthy
    })
  })

  describe('when is loading', () => {
    const wrapper = shallow(
      <Button label='Login' loading loadingText="Loading..." />
    )

    it('is disabled', () => {
      expect(wrapper.props().disabled).toBeTruthy
    })

    it('has loading text', () => {
      expect(wrapper.text()).toEqual('Loading...')
    })
  })

  describe('children', () => {
    const current = 'Something'
    const wrapper = shallow(
      <Button>
        {current}
      </Button>
    )

    it('has children', () => {
      expect(wrapper.text()).toEqual(current)
    })
  })
})
