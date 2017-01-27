import React from 'react'
import DrawerNav from "../../../../src/components/Drawer/Nav/Main"
import DrawerNavLink from "../../../../src/components/Drawer/Nav/Link"
import { shallow } from 'enzyme'

describe('DrawerNav', () => {
  const wrapper = shallow(
    <DrawerNav>
      <DrawerNavLink />
    </DrawerNav>
  )

  it('has drawer navigation class', () => {
    expect(wrapper.hasClass('sn-layout__drawer-navigation')).toBeTruthy()
  })

  it('has a children', () => {
    expect(wrapper.find(DrawerNavLink).length).toEqual(1)
  })
})