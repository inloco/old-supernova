import React from 'react'
import Footer from './../index'
import { shallow } from 'enzyme'

describe('Footer', () => {
  const wrapper = shallow(
    <Footer>
      <h4>I am the content.</h4>
    </Footer>
  )

  it('render Subheader', () => {
    const header = wrapper.find('[className="sn-layout__footer"]')

    expect(header.length).toEqual(1)
  })

  it('render content', () => {
    const content = wrapper.find('h4')

    expect(content.text()).toEqual('I am the content.')
  })

  describe('No children', () => {
    const emptyWrapper = shallow(
      <Footer>
      </Footer>
    )

    it('render no children', () => {
      const content = emptyWrapper.children()

      expect(content.length).toEqual(0)
    })
  })
})