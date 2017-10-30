import React from 'react'
import Collapsible from './../index'
import Item from './../Item'
import { shallow } from 'enzyme'

describe('Item', () => {
  const title = 'Title'
  const content = 'Content'
  const wrapper = shallow(
    <Collapsible>
      <Item title={title} content={content} />
      <Item title={title} content={content} />
      <Item title={title} content={content} />
    </Collapsible>
  )

  describe('when instantiated', () => {
    it('has default class', () => {
      expect(wrapper.hasClass('sn-collapsible')).toBeTruthy()
    })
  })
})