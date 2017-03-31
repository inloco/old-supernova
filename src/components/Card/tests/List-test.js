import React from 'react'
import CardsList from './../List'
import Card from './../index'
import { shallow } from 'enzyme'

describe('CardsList', () => {
  const wrapper = shallow(
    <CardsList className="app-card-list">
      <Card>A</Card>
      <Card>B</Card>
    </CardsList>
  )

  it('has correct className', () => {
    expect(wrapper.hasClass('sn-card__list')).toBeTruthy()
  })

  it('has custom className', () => {
    expect(wrapper.hasClass('app-card-list')).toBeTruthy()
  })

  it('has 2 cards inside', () => {
    const cards = wrapper.find(Card)

    expect(cards.length).toEqual(2)
  })

  it('doesnt have strip class', () => {
    expect(wrapper.hasClass('sn-card__list--strip')).toBeFalsy()
  })

  describe('when has strip option', () => {
    it('has strip className', () => {
      wrapper.setProps({ strip: true })

      expect(wrapper.hasClass('sn-card__list--strip')).toBeTruthy()
    })
  })
})
