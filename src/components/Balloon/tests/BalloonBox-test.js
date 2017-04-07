import React from 'react'
import BalloonBox from './../BalloonBox'
import { shallow } from 'enzyme'

describe('BalloonBox', () => {
  const wrapper = shallow(
    <BalloonBox>
      <h1>BalloonBox</h1>
    </BalloonBox>
  )

  it('has BalloonBox', () => {
    const balloonBox = wrapper.find('.sn-balloon-box')

    expect(balloonBox.length).toEqual(1)
  })

  it('has h1 children', () => {
    const children = wrapper.find('h1')

    expect(children.length).toEqual(1)
  })
})