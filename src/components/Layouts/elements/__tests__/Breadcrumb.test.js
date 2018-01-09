import React from 'react'
import { shallow } from 'enzyme'

import Breadcrumb from './../Breadcrumb'

describe('Breadcrumb', () => {
  const innerContent = <h1>title</h1>
  const wrapper = shallow(
    <Breadcrumb>
      {innerContent}
    </Breadcrumb>
  )

  const defaultClass = 'sn-brand'
  const customClass = 'custom-class'

  it('has correct children', () => {
    expect(wrapper.props().children).toEqual(innerContent)
  })

  it('has default class', () => {
    expect(wrapper.hasClass(defaultClass)).toBeTruthy()
  })

  describe('when has className prop', () => {
    beforeEach(() => {
      wrapper.setProps({ className: customClass })
    })

    it('has default and custom class', () => {
      expect(wrapper.hasClass(defaultClass)).toBeTruthy()
      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })
})