import React from "react"
import Meter from "./../../src/components/Meter"
import { shallow } from 'enzyme'

describe("Meter", () => {
  const wrapper = shallow(<Meter value="P&ssW0rd" />)


  it("has meter class", () => {
    const currentClass = wrapper.find('.sn-input__meter-box')

    expect(currentClass.length).toEqual(1)
  })

  it("has a progress name", () => {
    const expectedtName = 'Strong Forte'
    const currentName = wrapper.find('p')

    expect(expectedtName.includes(currentName.text())).toBeTruthy()
  })

  it("has a progress style", () => {
    const expectedtStyle = {
      width: '100%',
      backgroundColor: '#C6C6C6'
    }
    const currentStyle = wrapper.find('.t-progressive-bar').prop('style')

    expect(currentStyle).toEqual(expectedtStyle)
  })

  it("has a bar style", () => {
    const expectedtStyle = {
      width: '75%',
      height: '5px',
      backgroundColor: '#8BC34A',
      animation: 'progressBar 3s ease-in-out',
      animationFillMode: 'both'
    }
    const currentStyle = wrapper.find('.t-bar-style').prop('style')

    expect(currentStyle).toEqual(expectedtStyle)
  })
})
