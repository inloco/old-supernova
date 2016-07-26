jest.unmock("../../factories/components/tabs-factory")
jest.useRealTimers()

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import TabsFactory from "../../factories/components/tabs-factory"
import { isShowingContent, isActive } from "../../utils/tabs"

describe("Tabs", () => {
  const factory = new TabsFactory

  let component, node

  beforeEach(() => {
    component = factory.render()
    node = factory.getNode()
  })

  it("shows the second content tab", () => {
    isShowingContent(node, "Conteúdo de B")
  })

  it("has the second tab with active class", () => {
    const secondTab = node.querySelectorAll(".sn-tabs li")[1]

    isActive(secondTab)
  })

  describe("when click in first tab", () => {
    beforeEach(() => {
      const firstTabLink = node.querySelectorAll(".sn-tabs a")[0]

      TestUtils.Simulate.click(firstTabLink)
    })

    it("shows the first tab content", () => {
      isShowingContent(node, "Conteúdo de A")
    })

    it("has the first tab with active class", () => {
      const firstTab = node.querySelectorAll(".sn-tabs li")[0]

      isActive(firstTab)
    })
  })
})