import React from 'react'
import ResultCard from './../ResultCard'
import { shallow } from 'enzyme'

describe('ResultCard', () => {
  const onSelectResult = jest.fn()
  const result = {
    title: 'foo',
    info: 'some',
    subtitle: 'subtitle',
    secondaryImage: 'http://some-url.com/',
    tag: 'Some tag'
  }
  const wrapper = shallow(
    <ResultCard
      result={result}
      onSelectResult={onSelectResult}
    />
  )

  it('displays title', () => {
    expect(wrapper.text().includes('foo'))
  })

  it('displays info', () => {
    expect(wrapper.text().includes('some'))
  })

  it('displays subtitle', () => {
    expect(wrapper.text().includes('subtitle'))
  })

  it('displays secondary image', () => {
    const target = wrapper.find('.sn-search-box__item-content__image')
    expect(target.exists()).toBeTruthy()
    expect(target.props().src).toEqual(result.secondaryImage)
  })

  it('displays tag', () => {
    const target = wrapper.find('.sn-search-box__item-content__tag')
    expect(target.exists()).toBeTruthy()
    expect(target.props().children).toEqual(result.tag)
  })

  it('calls onSelectResult when clicked', () => {
    wrapper.simulate('mouseDown')

    expect(onSelectResult).toBeCalled()
  })

})
