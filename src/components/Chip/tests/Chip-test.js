import React from 'react'
import Chip from './../index'
import { shallow } from 'enzyme'

describe('Chip', () => {
  const fooFunc = jest.fn()

  const wrapper = shallow(
    <Chip
      text='Text'
      textColor="yellow"
      backgroundColor='red'
      leftIconCode="home"
      leftIconColor="yellow"
      leftIconClick={fooFunc}
      rightIconUrl="home"
      rightIconUrlAltText="alt text"
      rightIconClick={fooFunc}
    />
  )
  
  it('has text', () => {
    expect(wrapper.contains('Text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })

  it('has color style', () => {
    expect(wrapper.props().style.color).toBe("yellow")
  })

  it('has background color style', () => {
    expect(wrapper.props().style.backgroundColor).toBe("red")
  })

  describe('when has icon on the left', () => {
    it('shows icon', () => {
      expect(wrapper.find("Icon")).toBeTruthy()
    })

    it('has default class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon')).toBeTruthy()
    })

    it('has left class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon--left')).toBeTruthy()
    })

    it('has clickable class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon--clickable')).toBeTruthy()
    })

    it('icon executes onClick props when it is clicked', () => {
      wrapper.find("Icon").simulate('click')

      expect(fooFunc).toBeCalled()
    })
  })

  describe('when has image on the right', () => {
    it('shows image', () => {
      expect(wrapper.find("img")).toBeTruthy()
    })

    it('has default class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__image')).toBeTruthy()
    })

    it('has right class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__image--right')).toBeTruthy()
    })

    it('has clickable class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__image--clickable')).toBeTruthy()
    })

    it('image executes onClick props when it is clicked', () => {
      wrapper.find("img").simulate('click')

      expect(fooFunc).toBeCalled()
    })
  })
})
