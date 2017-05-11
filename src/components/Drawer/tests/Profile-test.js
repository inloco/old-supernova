import React from "react"
import ReactDOM from "react-dom"
import Drawer from "./../"
import DrawerProfile from "./../Profile"
import { shallow } from 'enzyme'

describe("Drawer Profile", () => {
  const onAccount = jest.fn()
  const onSignOut = jest.fn()
  const wrapper = shallow(
    <DrawerProfile
      name="Nome do Usuário"
      email="nome@inlocomedia.com"
      onAccount={onAccount}
      onSignOut={onSignOut}
      accountLabel="conta"
      signOutLabel="sair"
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

    it("shows account link", () => {
      expect(wrapper.find('[code="person"]').length).toEqual(1)
    })

    it("calls onAccount function", () => {
      const accountLink = wrapper.find('.sn-layout__drawer-user__info-actions a').first()

      accountLink.simulate('click')

      expect(onAccount).toBeCalled()
    })

    it("has custom account label", () => {
      const accountLink = wrapper.find('.sn-layout__drawer-user__info-actions a').first()

      expect(accountLink.text().includes('conta')).toBeTruthy()
    })

    it("shows onSignOut link", () => {
      expect(wrapper.find('[code="power_settings_new"]').length).toEqual(1)
    })

    it("calls onSignOut function", () => {
      const signOutLink = wrapper.find('.sn-layout__drawer-user__info-actions a').last()

      signOutLink.simulate('click')

      expect(onSignOut).toBeCalled()
    })

    it("has custom signOut label", () => {
      const accountLink = wrapper.find('.sn-layout__drawer-user__info-actions a').last()

      expect(accountLink.text().includes('sair')).toBeTruthy()
    })
  })
})
