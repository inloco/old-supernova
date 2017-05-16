import React from 'react'
import InfoBox from './../'
import { shallow } from 'enzyme'

describe('InfoBox', () => {
  const wrapper = shallow(
    <InfoBox
      title="Info title"
      content="Info content"
    />
  )

  it('has infobox classname', () => {
    expect(wrapper.hasClass('sn-info-box')).toBeTruthy()
  })

  it('has default type classname', () => {
    expect(wrapper.hasClass('sn-info-box--info')).toBeTruthy()
  })

  describe('when has type', () => {
    beforeEach(() => {
      wrapper.setProps({ type: 'danger' })
    })

    it('has danger type classname', () => {
      expect(wrapper.hasClass('sn-info-box--danger')).toBeTruthy()
    })
  })

  it('shows title', () => {
    expect(wrapper.find('.sn-info-box__title').contains('Info title')).toBeTruthy()
  })

  it('shows content', () => {
    expect(wrapper.find('.sn-info-box__content').contains('Info content')).toBeTruthy()
  })

  describe('when content has HTML', () => {
    beforeEach(() => {
      wrapper.setProps({ content: <span>Some content here with <a href="">Link</a></span> })
    })

    it('returns correct elements', () => {
      expect(wrapper.find('.sn-info-box__content a').exists()).toBeTruthy()
    })
  })
})
