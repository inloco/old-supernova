import React from 'react'
import { shallow } from 'enzyme'
import Toggle from '../../Toggle'

describe('Toggle component', () => {
  const buttonSelector = '.sn-toggle__button'
  const labelSelector = '.sn-toggle__label'

  const onChange = jest.fn()
  const label = 'Toggle Label'
  const wrapper = shallow(
    <Toggle
      label={label}
      initialValue={false}
      onChange={onChange}
    />
  )

  describe('basic structure', () => {
    it('has a toggle button', () => {
      expect(wrapper.find(buttonSelector).exists()).toBeTruthy()
    })

    it('has a label', () => {
      expect(wrapper.find(labelSelector).exists()).toBeTruthy()
    })
  })

  describe('basic behavior', () => {
    afterEach(() => {
      onChange.mockReset()
    })

    it('calls onChange when clicking the button', () => {
      const button = wrapper.find(buttonSelector)
      button.simulate('click')

      expect(onChange).toBeCalled()
    })

    it('calls onChange when clicking the label', () => {
      const label = wrapper.find(labelSelector)
      label.simulate('click')

      expect(onChange).toBeCalled()
    })

    it('toggles value when clicked', () => {
      wrapper.setState({ value: 'false' })

      const button = wrapper.find(buttonSelector)
      button.simulate('click')

      expect(onChange).toBeCalledWith('true')
    })

    it('do not render label when prop isn\'t passed', () => {
      wrapper.setProps({ label: undefined })
      expect(wrapper.find(labelSelector).exists()).toBeFalsy()
    })
  })
})
