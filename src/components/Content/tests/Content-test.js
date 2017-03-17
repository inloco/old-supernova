import React from 'react'
import Content from './../Main'
import { shallow } from 'enzyme'

describe('Content', () => {
  const wrapper = shallow(
    <Content>
      <h1>Content</h1>
    </Content>
  )

  it('has content', () => {
    const content = wrapper.find('.sn-layout__content')

    expect(content.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  describe('Content empty', () => {
    const emptyWrapper = shallow(
      <Content/>
    )

    it('has content with no children', () => {
      const children = emptyWrapper.find('.sn-layout__content').children()

      expect(children.length).toEqual(0)
    })
  })
})
