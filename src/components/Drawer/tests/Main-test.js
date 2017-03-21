import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Drawer from "./../Main"
import DrawerTitle from "./../Title"
import DrawerNav from "./../Nav/Main"
import DrawerNavLink from "./../Nav/Link"
import DrawerNavSection from "./../Nav/Section"
import DrawerProfile from "./../Profile"
import { shallow } from 'enzyme'

describe("Drawer", () => {
  const wrapper = shallow(
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

  it("has drawer element", () => {
    const drawer = wrapper.find(".sn-layout__drawer")

    expect(drawer).not.toBeNull()
  })
  
  it("has a title", () => {
    const title = wrapper.find(".sn-layout__drawer-title")

    expect(title).not.toBeNull()
  })

  it("has a navigation", () => {
    const nav = wrapper.find(".sn-layout__drawer-navigation")

    expect(nav).not.toBeNull()
  })

  it("has a nav link", () => {
    expect(wrapper.find("Link").length).toEqual(1)
  })

  it("has a nav section", () => {
    expect(wrapper.find("Section").length).toEqual(1)
  })
})
