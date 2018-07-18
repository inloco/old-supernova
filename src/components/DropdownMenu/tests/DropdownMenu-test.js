import React from 'react'
import DropdownMenu from '../index'
import Icon from '../../Icons'
import { mount } from 'enzyme'

describe('DropdownMenu', () => {
  const onOptionClick = jest.fn()
  const options = [
    { label: 'Edit', href: '/edit' },
    { label: 'Disable', href: '/disable' }
  ]
  const wrapper = mount(
    <DropdownMenu
      onOptionClick={onOptionClick}
      options={options}
    />
  )

  it('has correct className', () => {
    const current = wrapper.find('div').hasClass('sn-dropdown-menu')

    expect(current).toBeTruthy()
  })

  it('has an icon', () => {
    expect(wrapper.find(Icon).length).toEqual(1)
  })

  it('has an more_vert icon', () => {
    const icon = wrapper.find(Icon)

    expect(icon.length).toEqual(1)
    expect(icon.props().code).toEqual('more_vert')
  })

  it('starts closed', () => {
    expect(wrapper.state().open).toBeFalsy()
  })

  it('starts not displaying the options', () => {
    const optionsWrapper = getOptionsWrapper(wrapper)

    expect(optionsWrapper.length).toEqual(0)
  })

  describe('when click in dropdown', () => {
    beforeEach(() => {
      wrapper.setProps({ onClick: jest.fn() })
      wrapper.simulate('click')
    })

    it('should call "onClick" prop', () => {
      const { props: { onClick } } = wrapper.instance()
      expect(onClick).toHaveBeenCalled()
    })

    it('change the state to open', () => {
      expect(wrapper.state().open).toBeTruthy()
    })

    it('display the options', () => {
      const optionsWrapper = getOptionsWrapper(wrapper)

      expect(optionsWrapper.length).toEqual(1)
    })

    it('display the correct options', () => {
      const optionsWrapper = getOptionsWrapper(wrapper)

      expect(optionsWrapper.children().first().text()).toEqual(options[0].label)
      expect(optionsWrapper.children().last().text()).toEqual(options[1].label)
    })

    it('display 2 links', () => {
      const links = getOptionsWrapper(wrapper).find('span')

      expect(links.length).toEqual(2)
    })
  })

  describe('when click in a dropdown option', () => {
    beforeEach(() => {
      wrapper.simulate('click')

      getOptionsWrapper(wrapper).find('span').first().simulate('click')
    })

    it('calls on change event with event and option object', () => {
      expect(onOptionClick.mock.calls[0][0]).toEqual({ label: 'Edit', href: '/edit' })
    })

    it('closes the menu', () => {
      expect(wrapper.state().open).toBeFalsy()
    })
  })

  it('unmount with no errors', () => {
    wrapper.unmount()
  })
})

function getOptionsWrapper(wrapper) {
  return wrapper.find('.sn-dropdown-menu__options')
}
