import React from 'react'
import Action from './../Action'
import { shallow } from 'enzyme'

describe('Action', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <Action
      text="a-simple-text"
      onClick={onClick}
    />
  )

  it('has a Text component', () => {
    expect(wrapper.find('Text').exists()).toBeTruthy()
  })

  it('calls onClick function', () => {
    wrapper.simulate('click')
    expect(onClick).toBeCalled()
  })
})
