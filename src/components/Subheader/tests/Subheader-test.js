import React from 'react'
import Subheader from './../'
import { shallow } from 'enzyme'

describe('Subheader', () => {
  const wrapper = shallow(
    <Subheader>
      <h1>I am the content.</h1>
    </Subheader>
  )

  it('render Subheader', () => {
    const header = wrapper.find('[className="sn-layout__subheader"]')

    expect(header.length).toEqual(1)
  })

  it('render content', () => {
    const content = wrapper.find('h1')

    expect(content.text()).toEqual('I am the content.')
  })

  describe('No children', () => {
    const emptyWrapper = shallow(
      <Subheader>
      </Subheader>
    )

    it('render no children', () => {
      const content = emptyWrapper.children()

      expect(content.length).toEqual(0)
    })
  })
})