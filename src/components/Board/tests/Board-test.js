import React from 'react'
import Board from './../Main'
import { shallow } from 'enzyme'

describe('Board', () => {
  const wrapper = shallow(
    <Board>
      <h1>Board</h1>
    </Board>
  )

  it('has Board', () => {
    const board = wrapper.find('.sn-board')

    expect(board.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })

  it('has bleed props', () => {
    wrapper.setProps({ bleed: true })

    const boardWithBleed = wrapper.find('.sn-board--bleed')

    expect(boardWithBleed.length).toEqual(1)
  })

  it('has no bleed props', () => {
    wrapper.setProps({ bleed: false })

    const boardWithoutBleed = wrapper.find('.sn-board--bleed')

    expect(boardWithoutBleed.length).toEqual(0)
  })

  describe('Board with no content', () => {
    const EmptyWrapper = shallow(
      <Board/>
    )

    it('render no children', () => {
      const children = EmptyWrapper.children()

      expect(children.length).toEqual(0)
    })
  })
})
