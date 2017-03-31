import React from 'react'
import Text from './../index'
import { shallow, mount } from 'enzyme'

describe('Balloon', () => {
  const wrapper = shallow(<Text type='header' size="1">Texto</Text>)

  it('has a text', () => {
    const expectedText = "Texto"
    const currentText = wrapper.text()

    expect(currentText).toEqual(expectedText)
  })

  describe('tag h', () => {
    it('is a h1 tag', () => {
      const component = wrapper.find('h1')

      expect(component.length).toEqual(1)
    })

    it('is a h2 tag', () => {
      wrapper.setProps({ size: "2" })
      const component = wrapper.find('h2')

      expect(component.length).toEqual(1)
    })

    it('is a h3 tag', () => {
      wrapper.setProps({ size: "3" })
      const component = wrapper.find('h3')

      expect(component.length).toEqual(1)
    })

    it('is a h4 tag', () => {
      wrapper.setProps({ size: "4" })
      const component = wrapper.find('h4')

      expect(component.length).toEqual(1)
    })

    it('is a h5 tag', () => {
      wrapper.setProps({ size: "5" })
      const component = wrapper.find('h5')

      expect(component.length).toEqual(1)
    })

    it('is a h6 tag', () => {
      wrapper.setProps({ size: "6" })
      const component = wrapper.find('h6')

      expect(component.length).toEqual(1)
    })
  })

  describe('tag p', () => {
    it('is a p', () => {
      wrapper.setProps({ type: 'display', size: "1" })
      const component = wrapper.find('p')

      expect(component.length).toEqual(1)
    })

    it('is a p tag with display 1', () => {
      const expectedClassName = 'sn-typo--display-1'
      const currentClassName = wrapper.find('p').props().className.trim()

      expect(currentClassName).toEqual(expectedClassName)
    })

    it('is a p tag with title', () => {
      wrapper.setProps({ type: 'title', size: undefined })
      const expectedClassName = 'sn-typo--title'
      const currentClassName = wrapper.find('p').props().className.trim()

      expect(currentClassName).toEqual(expectedClassName)
    })
  })

  describe('tag span', () => {
    it('is a span', () => {
      wrapper.setProps({ span: true })
      const component = wrapper.find('span')

      expect(component.length).toEqual(1)
    })

    it('is a span tag with title', () => {
      wrapper.setProps({ type: 'title' })
      const expectedClassName = 'sn-typo--title'
      const currentClassName = wrapper.find('span').props().className.trim()

      expect(currentClassName).toEqual(expectedClassName)
    })

    it('is a span tag with display 1', () => {
      wrapper.setProps({ type: 'display', size: "1" })
      const expectedClassName = 'sn-typo--display-1'
      const currentClassName = wrapper.find('span').props().className.trim()

      expect(currentClassName).toEqual(expectedClassName)
    })
  })

  describe('text configurations', () => {
    it('has font Weight', () => {
      wrapper.setProps({ fontWeight: 'thin' })
      const expectedClassName = 'sn-typo--font-thin'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })

    it('has align', () => {
      wrapper.setProps({ align: 'left' })
      const expectedClassName = 'sn-typo--text-left'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })

    it('has caps', () => {
      wrapper.setProps({ caps: 'lowercase' })
      const expectedClassName = 'sn-typo--text-lowercase"'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })

    it('has wrap', () => {
      wrapper.setProps({ wrap: 'text-nowrap' })
      const expectedClassName = 'sn-typo--text-nowrap'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })

    it('has className', () => {
      wrapper.setProps({ className: 'app-text' })
      const expectedClassName = 'app-text'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })

    it('has color', () => {
      wrapper.setProps({ color: 'sn-color--primary-text' })
      const expectedClassName = 'sn-color--primary-text'
      const currentClassName = wrapper.find('span').props().className

      expect(currentClassName.includes(expectedClassName))
    })
  })
})
