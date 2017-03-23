import React from 'react'
import DropdownMenu from './../../src/components/DropdownMenu'
import Icon from './../../src/components/Icon'
import { shallow } from 'enzyme'

describe('DropdownMenu', () => {
  const options = [
    { label: 'Edit', href: '/edit' },
    { label: 'Disable', href: '/disable' }
  ]
  const wrapper = shallow(<DropdownMenu options={options} />)

  it('has correct className', () => {
    expect(wrapper.hasClass('sn-dropdown-menu')).toBeTruthy()
  })

  it('has an more_vert icon', () => {
    const icon = wrapper.find(Icon)

    expect(icon.props().code).toEqual('more_vert')
  })

  it('starts closed', () => {
    expect(wrapper.state().open).toBeFalsy()
  })

  it('dont display the options', () => {
    const optionsWrapper = getOptionsWrapper(wrapper)

    expect(optionsWrapper.length).toEqual(0)
  })

  describe('when click in dropdown', () => {
    beforeEach(() => wrapper.simulate('click'))

    it('change the state to open', () => {
      expect(wrapper.state().open).toBeTruthy()
    })

    it('display the options', () => {
      const optionsWrapper = getOptionsWrapper(wrapper)

      expect(optionsWrapper.length).toEqual(1)
    })

    it('display 2 links', () => {
      const links = getOptionsWrapper(wrapper).find('a')

      expect(links.length).toEqual(2)
    })
  })
})

function getOptionsWrapper(wrapper) {
  return wrapper.find('.sn-dropdown-menu__options')
}
