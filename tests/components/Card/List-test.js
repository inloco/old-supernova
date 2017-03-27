import React from 'react'
import CardsList from './../../../src/components/Card/List'
import Card from './../../../src/components/Card/Main'
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
    beforeAll(() => wrapper.setProps({ strip: true }))

    it('has strip className', () => {
      expect(wrapper.hasClass('sn-card__list--strip')).toBeTruthy()
    })
  })
})
