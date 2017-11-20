import React from 'react'
import Spinner from '../index'
import { mount } from 'enzyme'

describe('Spinner', () => {
  const url = 'https://stylishthemes.github.io/GitHub-Dark/images/octocat-spinner-smil.min.svg'
  const wrapper = mount(<Spinner iconUrl={url} />)

  it('has a spinner class', () => {
    const current = wrapper.find('div').hasClass('sn-spinner')

    expect(current).toBeTruthy()
  })

  it('does not has a rotation class when rotation isn\'t forced', () => {
    expect(wrapper.hasClass('sn-spinner--rotate')).toBeFalsy()
  })

  it('has a rotation class when rotation is forced', () => {
    wrapper.setProps({ forceRotation: true })

    const current = wrapper.find('div').hasClass('sn-spinner--rotate')

    expect(current).toBeTruthy()
  })


  it('has a spinner icon inside it', () => {
    expect(wrapper.find('.sn-spinner__icon').length).toEqual(1)
  })
})
