import React from "react"
import SearchBox from "./../../src/components/SearchBox"
import { shallow } from "enzyme"

describe("Search Box", () => {
  const onChangeSpy = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SearchBox
        label="Busque aqui"
        helpMessage="Foo"
        typeMessage="info"
        onChange={onChangeSpy}
        results={[{ id: 0, title: "foo"}]}/>
    )
  })

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

  context("when input change", () => {
    it("executes onChange function 1 time", () => {
      const fooEvent = { target: { value: "foo" }}

      wrapper.find("input").simulate('change', fooEvent)

      expect(onChangeSpy.mock.calls.length).toEqual(1)
      expect(onChangeSpy).toBeCalledWith(fooEvent)
    })

    it("updates results", () => {
      wrapper.setProps({
        results: [
          { id: 1, title: "other" },
          { id: 2, title: "baar" }
        ]
      })

      expect(wrapper.state().results.length).toEqual(3)
      expect(wrapper.state().latestResultsIds.length).toEqual(2)
    })
  })
})