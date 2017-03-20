import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Drawer from "./../Main"
import DrawerProfile from "./../Profile"
import { shallow } from 'enzyme'

describe("Drawer Profile", () => {
  const wrapper = shallow(
    <DrawerProfile
      name="Nome do Usuário"
      email="nome@inlocomedia.com"
    />
  )

  it("has an avatar", () => {
    const avatar = wrapper.find(".sn-layout__drawer-user__avatar")

    expect(wrapper.length).toEqual(1)
  })

  it("has user info", () => {
    const info = wrapper.find(".sn-layout__drawer-user__info")

    expect(info.length).toEqual(1)
  })

  describe("user info", () => {
    it("has user with name 'Nome do Usuário'", () => {
      const name = wrapper.find(".sn-layout__drawer-user__info-name")

      expect(name.text()).toEqual("Nome do Usuário")
    })

    it("has user with email 'nome@inlocomedia.com'", () => {
      const email = wrapper.find(".sn-layout__drawer-user__info-contact")

      expect(email.text()).toEqual("nome@inlocomedia.com")
    })

    it("has actions", () => {
      const actions = wrapper.find(".sn-layout__drawer-user__info-actions")

      expect(actions.length).toEqual(1)
    })
  })
})
