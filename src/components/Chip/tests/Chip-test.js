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
    expect(wrapper.find('span').contains('Text')).toBeTruthy()
  })

  it('has text class', () => {
    expect(wrapper.find('span').hasClass('sn-chip__inner-wrapper__text')).toBeTruthy()
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
    expect(wrapper.find('span').contains('Text')).toBeTruthy()
  })

  it('has text class', () => {
    expect(wrapper.find('span').hasClass('sn-chip__inner-wrapper__text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })

  describe('when has icon on the right', () => {
    it('shows icon', () => {
      expect(wrapper.find("Icon")).toBeTruthy()
    })

    it('has default class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon')).toBeTruthy()
    })

    it('has right class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon--right')).toBeTruthy()
    })

    it('has clickable class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon--clickable')).toBeTruthy()
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
      expect(wrapper.find("img").hasClass('sn-chip__inner-wrapper__image')).toBeTruthy()
    })

    it('has left class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__inner-wrapper__image--left')).toBeTruthy()
    })
  })
})

describe('Chip with icon and secondary image', () => {
  const secondaryImage = 'http://some-url.com/'
  const wrapper = shallow(
    <Chip
      text='Text'
      iconCode="home"
      iconClick={() => {}}
      secondaryImage={secondaryImage}
    />
  )

  it('has text', () => {
    expect(wrapper.find('span').contains('Text')).toBeTruthy()
  })

  it('has text class', () => {
    expect(wrapper.find('span').hasClass('sn-chip__inner-wrapper__text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })

  it('has secondary image', () => {
    const target = wrapper.find('.sn-chip__inner-wrapper__secondary-image')
    expect(target.exists()).toBeTruthy()
    expect(target.props().src).toEqual(secondaryImage)
  })
})

describe('Chip with icon and tag', () => {
  const tag = 'Some tag'
  const wrapper = shallow(
    <Chip
      text="Text"
      iconCode="home"
      iconClick={() => {}}
      imageUrl="home"
      imageUrlAltText="alt text"
      tag={tag}
    />
  )

  it('has text', () => {
    expect(wrapper.find('span').contains('Text')).toBeTruthy()
  })

  it('has text class', () => {
    expect(wrapper.find('span.sn-chip__inner-wrapper__text').hasClass('sn-chip__inner-wrapper__text')).toBeTruthy()
  })

  it('has class', () => {
    expect(wrapper.hasClass('sn-chip')).toBeTruthy()
  })

  it('has tag', () => {
    const target = wrapper.find('.sn-chip__inner-wrapper__tag')
    expect(target.exists()).toBeTruthy()
    expect(target.props().children).toEqual(tag)
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
    expect(wrapper.find('span').contains('Text')).toBeTruthy()
  })

  it('has text class', () => {
    expect(wrapper.find('span').hasClass('sn-chip__inner-wrapper__text')).toBeTruthy()
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
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon')).toBeTruthy()
    })

    it('has left class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon--left')).toBeTruthy()
    })

    it('has clickable class', () => {
      expect(wrapper.find("Icon").hasClass('sn-chip__inner-wrapper__icon--clickable')).toBeTruthy()
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
      expect(wrapper.find("img").hasClass('sn-chip__inner-wrapper__image')).toBeTruthy()
    })

    it('has right class', () => {
      expect(wrapper.find("img").hasClass('sn-chip__inner-wrapper__image--right')).toBeTruthy()
    })

    it('image executes onClick props when it is clicked', () => {
      wrapper.find("img").simulate('click')

      expect(fooFunc).toBeCalled()
    })
  })
})
