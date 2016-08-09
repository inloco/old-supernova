jest.unmock("../factories/components/searchbox-factory")

import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import SearchBoxFactory from "../factories/components/searchbox-factory"

describe("Search Box", () => {
  const factory = new SearchBoxFactory
  const node = factory.getNode()

  it("has searchbox class", () => {
    expect(node.classList.contains("sn-search-box")).toBeTruthy()
  })

  it("has an input", () => {
    const input = node.querySelector("input.sn-search-box__input")

    expect(input).not.toBeNull()
  })

  it("has an input icon", () => {
    const icon = node.querySelector(".sn-search-box__input--icon")

    expect(icon).not.toBeNull()
  })

  it("has a placeholder with 'Busque aqui'", () => {
    const input = node.querySelector("input.sn-search-box__input")

    expect(input.placeholder).toEqual("Busque aqui")
  })

  it("has a help message with 'foo' content", () => {
    const message = node.querySelector(".sn-search-box__message")

    expect(message.textContent).toEqual("Foo")
  })

  it("has a info help message", () => {
    const infoMessage = node.querySelector(".sn-search-box__message.sn-search-box__message--info")

    expect(infoMessage).not.toBeNull()
  })
})