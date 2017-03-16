import React from 'react'
import Layout from './../Main'
import { shallow } from 'enzyme'

describe('Layout', () => {
  const wrapper = shallow(
    <Layout>
      <h1>Cotnent</h1>
    </Layout>
  )

  it('has layout container', () => {
    const container = wrapper.find('.sn-layout__container')

    expect(container.length).toEqual(1)
  })

  it('has layout element', () => {
    const layout = wrapper.find('.sn-layout')

    expect(layout.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  it('not have drawer', () => {
      const layoutWithoutDrawer = wrapper.find('.sn-layout--fixed-drawer')

      expect(layoutWithoutDrawer.length).toEqual(0)
  })

  describe('Layout using drawer', () => {
    it('have drawer', () => {
      wrapper.setProps({ drawer: true })

      const layoutWithDrawer = wrapper.find('.sn-layout--fixed-drawer')

      expect(layoutWithDrawer.length).toEqual(1)
    })

    it('not have drawer', () => {
      wrapper.setProps({ drawer: false })

      const layoutWithDrawer = wrapper.find('.sn-layout--fixed-drawer')

      expect(layoutWithDrawer.length).toEqual(0)
    })
  })
})
