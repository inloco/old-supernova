import React from "react"
import SearchBox from "./../../src/components/SearchBox"
import { shallow } from "enzyme"

describe("Search Box", () => {
  const wrapper = shallow(
    <SearchBox
      label="Busque aqui"
      helpMessage="Foo"
      typeMessage="info"/>
  )

  it("has searchbox class", () => {
    expect(wrapper.hasClass("sn-search-box")).toBeTruthy()
  })

  it("has an input", () => {
    const input = wrapper.find("input.sn-search-box__input")

    expect(input).not.toBeNull()
  })

  it("has an input icon", () => {
    const icon = wrapper.find(".sn-search-box__input--icon")

    expect(icon).not.toBeNull()
  })

  it("has a placeholder with 'Busque aqui'", () => {
    const input = wrapper.find("input.sn-search-box__input")

    expect(input.props().placeholder).toEqual("Busque aqui")
  })

  it("has a help message with 'foo' content", () => {
    const message = wrapper.find(".sn-search-box__message")

    expect(message.text()).toEqual("Foo")
  })

  it("has a info help message", () => {
    const infoMessage = wrapper.find(".sn-search-box__message.sn-search-box__message--info")

    expect(infoMessage).not.toBeNull()
  })
})