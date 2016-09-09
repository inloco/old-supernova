jest.unmock("../../factories/components/drawer-factory")

import DrawerFactory from "../../factories/components/drawer-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

describe("Drawer Profile", () => {
  const factory = new DrawerFactory
  const node = factory.getNode().querySelector(".sn-layout__drawer-user")

  it("exists", () => {
    expect(node).not.toEqual(null)
  })

  it("has an avatar", () => {
    const avatar = node.querySelector(".sn-layout__drawer-user__avatar")

    expect(avatar).not.toEqual(null)
  })

  it("has user info", () => {
    const info = node.querySelector(".sn-layout__drawer-user__info")

    expect(info).not.toEqual(null)
  })

  describe("user info", () => {
    it("has user with name 'Nome do Usuário'", () => {
      const name = node.querySelector(".sn-layout__drawer-user__info-name")

      expect(name.textContent).toEqual("Nome do Usuário")
    })

    it("has user with email 'nome@inlocomedia.com'", () => {
      const email = node.querySelector(".sn-layout__drawer-user__info-contact")

      expect(email.textContent).toEqual("nome@inlocomedia.com")
    })

    it("has actions", () => {
      const actions = node.querySelector(".sn-layout__drawer-user__info-actions")

      expect(actions).not.toEqual(null)
    })
  })
})
