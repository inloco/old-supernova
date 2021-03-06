import React from 'react'
import CodeBox from './../index'
import { shallow } from 'enzyme'

describe('CodeBox', () => {
  const content = 'print("Hello, World!")'
  const wrapper = shallow(
    <CodeBox>{content}</CodeBox>
  )

  it('has class', () => {
    expect(wrapper.hasClass('sn-code-box')).toBeTruthy()
  })

  it('has default title', () => {
    expect(wrapper.find('.sn-code-box__title').text()).toBe('HTML')
  })

  it('has default lang class', () => {
    expect(wrapper.find('.html')).toBeTruthy()
  })

  it('has code content', () => {
    const codeBoxContent = wrapper.find('.sn-code-box__code').render().text()

    expect(codeBoxContent).toBe(content) // renders the Highlight component interior
  })

  describe('when has custom lang', () => {
    const lang = 'python'

    beforeEach(() => {
      wrapper.setProps({lang: lang})
    })

    it('has custom title', () => {
      expect(wrapper.find(`.${lang}`)).toBeTruthy()
    })
  })

  describe('when has custom title', () => {
    const title = 'Python'

    beforeEach(() => {
      wrapper.setProps({title: title})
    })

    it('has custom title', () => {
      expect(wrapper.find('.sn-code-box__title').text()).toBe(title)
    })
  })

  describe('when has custom className', () => {
    const customClass = 'app-code-box'

    beforeEach(() => {
      wrapper.setProps({className: customClass})
    })

    it('has custom className', () => {
      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })

  describe('when has hideTitle', () => {
    beforeEach(() => {
      wrapper.setProps({hideTitle: true})
    })

    it('hides title', () => {
      expect(wrapper.find('.sn-code-box__title').length).toBe(0)
    })
  })

  describe('when has hideCopyToClipboard', () => {
    beforeEach(() => {
      wrapper.setProps({hideCopyToClipboard: true})
    })

    it('hides Copy to Clipboard button', () => {
      expect(wrapper.find('CopyToClipboard').length).toBe(0)
    })
  })

  describe('when copy to clipboard is clicked', () => {
    beforeEach(() => {
      wrapper.setProps({hideCopyToClipboard: false})
    })

    it('calls handleClickButton method when clicked', () => {
      const spy = spyOn(CodeBox.prototype, 'handleClickButton')
      spy.calls.track()

      const button = wrapper.find('div').find('.sn-code-box__copy-button').first()

      button.simulate('click')

      expect(spy.calls.count()).toBe(1)
    })
  })

  describe('when close alert is clicked', () => {
    beforeEach(() => {
      wrapper.setProps({open: true})
    })

    it('calls handleCloseButton method when clicked', () => {
      const spy = spyOn(CodeBox.prototype, 'handleCloseButton')
      spy.calls.track()

      const button = wrapper.find('Alert').dive().find('button').first()
      button.simulate('click')

      expect(spy.calls.count()).toBe(1)
    })
  })
})