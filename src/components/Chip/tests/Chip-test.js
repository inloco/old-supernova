import React from 'react'
import Chip from './../index'
import { shallow } from 'enzyme'

describe('Chip', () => {
  const fooFunc = jest.fn()

  const wrapper = shallow(
    <Chip
      text='Text'
    />
  )
  
  it('has text', () => {
    expect(wrapper.contains('Text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })
})

describe('Chip with image and icon', () => {
  const fooFunc = jest.fn()

  const wrapper = shallow(
    <Chip
      text='Text'
      iconCode="home"
      iconClick={fooFunc}
      imageUrl="home"
      imageUrlAltText="alt text"
    />
  )
  
  it('has text', () => {
    expect(wrapper.contains('Text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })

  describe('when has icon on the right', () => {
    it('shows icon', () => {
      expect(wrapper.find("Icon")).toBeTruthy()
    })

    it('has default class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon')).toBeTruthy()
    })

    it('has right class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon--right')).toBeTruthy()
    })

    it('has clickable class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__icon--clickable')).toBeTruthy()
    })

    it('icon executes onClick props when it is clicked', () => {
      wrapper.find("Icon").simulate('click')

      expect(fooFunc).toBeCalled()
    })
  })

  describe('when has image on the left', () => {
    it('shows image', () => {
      expect(wrapper.find("img")).toBeTruthy()
    })

    it('has default class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__image')).toBeTruthy()
    })

    it('has left class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__image--left')).toBeTruthy()
    })
  })
})

describe('Chip with reversed image and icon', () => {
  const fooFunc = jest.fn()

  const wrapper = shallow(
    <Chip
      text='Text'
      textColor="yellow"
      backgroundColor='red'
      iconCode="home"
      iconColor="yellow"
      iconClick={fooFunc}
      imageUrl="home"
      imageUrlAltText="alt text"
      reversed
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

    it('image executes onClick props when it is clicked', () => {
      wrapper.find("img").simulate('click')

      expect(fooFunc).toBeCalled()
    })
  })
})
