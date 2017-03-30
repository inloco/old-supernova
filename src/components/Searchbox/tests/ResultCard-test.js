import React from 'react'
import ResultCard from './../ResultCard'
import { shallow } from 'enzyme'

describe('ResultCard', () => {
  const onSelectResult = jest.fn()
  const result = {
    title: 'foo',
    info: 'some',
    subtitle: 'subtitle'
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

  it('calls onSelectResult when clicked', () => {
    wrapper.simulate('mouseDown')

    expect(onSelectResult).toBeCalled()
  })
})
