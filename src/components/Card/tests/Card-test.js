import React from 'react'
import Card from './../index'
import { shallow } from 'enzyme'

describe('Card', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <Card className="some" onClick={onClick} cardColor="#000">
      <h1>Some</h1>
    </Card>
  )

  it('has card class', () => {
    expect(wrapper.hasClass('sn-card')).toBeTruthy()
  })

  it('has custom className', () => {
    expect(wrapper.hasClass('some')).toBeTruthy()
  })

  it('has children', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('has card color', () => {
    const expectedSytle = {
      borderLeftColor: '#000',
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid'
    }
    const currentStyle = wrapper.props().style

    expect(currentStyle).toEqual(expectedSytle)
  })

  it('has padding class', () => {
    expect(wrapper.hasClass('sn-card--padding')).toBeTruthy()
  })

  it('has not bordered class', () => {
    expect(wrapper.hasClass('sn-card--bordered')).toBeFalsy()
  })

  it('has not flat class', () => {
    expect(wrapper.hasClass('sn-card--flat')).toBeFalsy()
  })

  it('has not bleed class', () => {
    expect(wrapper.hasClass('sn-card--bleed')).toBeFalsy()
  })

  describe('when click', () => {
    it('calls onClick', () => {
      wrapper.simulate('click')

      expect(onClick).toBeCalled()
    })
  })

  describe('change default props', () => {
    it('has not padding class', () => {
      wrapper.setProps({ padding: false })

      expect(wrapper.hasClass('sn-card--padding')).toBeFalsy()
    })

    it('has bordered class', () => {
      wrapper.setProps({ bordered: true })

      expect(wrapper.hasClass('sn-card--bordered')).toBeTruthy()
    })

    it('has flat class', () => {
      wrapper.setProps({ flat: true })

      expect(wrapper.hasClass('sn-card--flat')).toBeTruthy()
    })

    it('has bleed class', () => {
      wrapper.setProps({ bleed: true })

      expect(wrapper.hasClass('sn-card--bleed')).toBeTruthy()
    })
  })
})