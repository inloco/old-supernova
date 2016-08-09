jest.unmock("../../factories/components/drawer-factory")

import DrawerFactory from "../../factories/components/drawer-factory"

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"

describe("Drawer", () => {
  const factory = new DrawerFactory
  const node = factory.getNode()

  it("has an ofuscator", () => {
    const ofuscator = node.querySelector(".sn-layout__ofuscator")

    expect(ofuscator).not.toBeNull()
  })

  describe("drawer", () => {
    const drawer = node.querySelector(".sn-layout__drawer")

    it("exists", () => {
      expect(drawer).not.toBeNull()
    })

    it("has a title", () => {
      const title = node.querySelector(".sn-layout-title")

      expect(title).not.toBeNull()
    })

    it("has a navigation", () => {
      const nav = node.querySelector(".sn-navigation")

      expect(nav).not.toBeNull()
    })

    it("has 3 nav links", () => {
      const links = node.querySelectorAll("a")

      expect(links.length).toEqual(3)
    })
  })
})
