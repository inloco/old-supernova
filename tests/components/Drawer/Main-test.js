import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Drawer from "../../../src/components/Drawer/Main"
import DrawerTitle from "../../../src/components/Drawer/Title"
import DrawerNav from "../../../src/components/Drawer/Nav/Main"
import DrawerNavLink from "../../../src/components/Drawer/Nav/Link"
import DrawerNavSection from "../../../src/components/Drawer/Nav/Section"
import DrawerProfile from "../../../src/components/Drawer/Profile"
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

  describe("drawer", () => {
    const drawer = wrapper.find(".sn-layout__drawer")

    it("exists", () => {
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
})
