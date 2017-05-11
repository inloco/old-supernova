import React from 'react'
import ReactDOM from 'react-dom'
import Drawer from './../'
import DrawerTitle from './../Title'
import DrawerNav from './../Nav/Main'
import DrawerNavLink from './../Nav/Link'
import DrawerNavSection from './../Nav/Section'
import DrawerProfile from './../Profile'
import { mount } from 'enzyme'

describe('Drawer', () => {
  const wrapper = mount(
    <Drawer>
      <DrawerTitle>AdsOps</DrawerTitle>
      <DrawerProfile
        name="Nome do Usuário"
        email="nome@inlocomedia.com"/>
      <DrawerNav>
        <DrawerNavLink>
          <a href="/panel/" label="Propostas"></a>
        </DrawerNavLink>
        <DrawerNavSection title="Titulo" />
      </DrawerNav>
    </Drawer>
  )

  it('has drawer element', () => {
    const drawer = wrapper.find('.sn-layout__drawer')

    expect(drawer).not.toBeNull()
  })

  it('has a title', () => {
    const title = wrapper.find('.sn-layout__drawer-title')

    expect(title).not.toBeNull()
  })

  it('has a navigation', () => {
    const nav = wrapper.find('.sn-layout__drawer-navigation')

    expect(nav).not.toBeNull()
  })

  it('has a nav link', () => {
    expect(wrapper.find('Link').length).toEqual(1)
  })

  it('has a nav section', () => {
    expect(wrapper.find('Section').length).toEqual(1)
  })

  describe('click', () => {
    it('simulate click', () => {
      const obfuscator = wrapper.find('.sn-layout__obfuscator')
      obfuscator.simulate('click')

      expect(wrapper.state().open).toBeTruthy()
    })
  })

  describe('when is open', () => {
    beforeEach(() => {
      wrapper.setState({
        open: true
      })
    })

    it('drawer is visible', () => {
      const visible = wrapper.find('.is-visible')

      expect(visible.length).toEqual(2)
    })
  })

  describe('when is closed', () => {
    beforeEach(() => {
      wrapper.setState({
        open: false
      })
    })

    it('drawer is not findable', () => {
      const visible = wrapper.find('.is-visible')

      expect(visible.length).toEqual(0)
    })
  })

  describe('when it has no children', () => {
    beforeEach(() => {
      wrapper.setProps({
        children: []
      })
    })

    it('has dialog class', () => {
      const content = wrapper.find('[className="sn-layout__drawer--wrap"]')
      expect(content.props().children.length).toEqual(0)
    })
  })

  it('unmout with no error', () => {
    wrapper.unmount();
  })
})
