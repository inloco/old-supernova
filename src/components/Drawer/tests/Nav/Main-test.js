import React from 'react'
import DrawerNav from "./../../Nav/Main"
import DrawerNavLink from "./../../Nav/Link"
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