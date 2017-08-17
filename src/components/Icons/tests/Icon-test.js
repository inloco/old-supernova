import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../index'
import { shallow } from 'enzyme'

describe('Icon', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <Icon code="add" className="some" onClick={onClick} />
  )

  it('has icon className', () => {
    expect(wrapper.hasClass('material-icons')).toBeTruthy()
  })
  
  it('has custom className', () => {
    expect(wrapper.hasClass('some')).toBeTruthy()
  })

  it('has material code', () => {
    expect(wrapper.children().node).toEqual('add')
  })

  describe('when click', () => {
    it('calls onClick', () => {
      wrapper.simulate('click')

      expect(onClick).toBeCalled()
    })
  })
})
