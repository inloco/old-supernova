import React from 'react'
import Spinner from '../index'
import { mount } from 'enzyme'

describe('Spinner', () => {
  const wrapper = mount(
    <Spinner iconUrl={'https://stylishthemes.github.io/GitHub-Dark/images/octocat-spinner-smil.min.svg'} />
  )

  it('has a spinner class', () => {
    expect(wrapper.hasClass('sn-spinner')).toBeTruthy()
  })
  
  it('does not has a rotation class when rotation isn\'t forced', () => {
    expect(wrapper.hasClass('sn-spinner--rotate')).toBeFalsy()
  })

  it('has a rotation class when rotation is forced', () => {
    wrapper.setProps({
      forceRotation: true
    })

    expect(wrapper.hasClass('sn-spinner--rotate')).toBeTruthy()
  })


  it('has a spinner icon inside it', () => {
    expect(wrapper.find('.sn-spinner__icon').length).toEqual(1)
  })
})
