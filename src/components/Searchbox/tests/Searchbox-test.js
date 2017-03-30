import React from 'react'
import Searchbox from './../'
import ResultCard from './../ResultCard'
import { shallow } from 'enzyme'

describe('Searchbox', () => {
  let wrapper

  const onSearch = jest.fn()

  wrapper = shallow(
    <Searchbox
      onSearch={onSearch}
      onSelect={() => {}}
      onUnselect={() => {}}
      results={[
        { id: '1', title: 'Shoppings' },
        { id: '2', title: 'Bars' }
      ]}
    />
  )

  const input = wrapper.find('input')

  beforeEach(() => {
    onSearch.mockClear()
  })

  it('renders an input', () => {
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('renders a search icon', () => {
    expect(wrapper.find('.sn-search-box__input--icon')).toHaveLength(1)
  })

  it('doesnt display results', () => {
    expect(wrapper.find('.sn-search-box__item-content')).toHaveLength(0)
  })

  describe('when enter in the input', () => {
    it('changes expandedResults to true', () => {
      input.simulate('focus')

      expect(wrapper.state().expandedResults)
    })
  })

  describe('when leave the input', () => {
    it('changes expandedResults to false', () => {
      input.simulate('blur')

      expect(!wrapper.state().expandedResults)
    })
  })

  describe('when starts the search', () => {
    beforeEach(() => {
      input.simulate('focus')
    })

    afterEach(() => {
      input.simulate('blur')
    })

    describe('when not have the minimum length', () => {
      beforeEach(() => {
        input.simulate('change', { target: { value: 'sh' }})
      })

      it('doesnt display the results', () => {
        expect(wrapper.find('.sn-search-box__results')).toHaveLength(0)
      })
    })

    describe('when have the minimum length', () => {
      beforeEach(() => {
        input.simulate('change', { target: { value: 'shopping' }})
      })

      it('displays the two results', () => {
        expect(wrapper.find(ResultCard)).toHaveLength(2)
      })

      describe('when select a result', () => {
        it('stores the result on state', () => {
          const firstResult = wrapper.find(ResultCard).first()
          const expectedResult = [
            { id: '1', title: 'Shoppings' }
          ]

          firstResult.props().onSelectResult(firstResult.props().result)

          expect(wrapper.state().selectedResults).toEqual(expectedResult)
        })

        it('displays the remaining result', () => {
          expect(wrapper.find(ResultCard)).toHaveLength(1)
        })

        it('displays the selectedResult', () => {
          expect(wrapper.find('.sn-search-box__item-content')).toHaveLength(1)
        })
      })

      describe('when unselect a result', () => {
        it('stores the exclusion on state', () => {
          const firstSelectedResult = wrapper.find('.sn-search-box__item-button').first()
          const expectedResult = []

          firstSelectedResult.simulate('click')

          expect(wrapper.state().selectedResults).toEqual(expectedResult)
        })

        it('displays the remainings result', () => {
          expect(wrapper.find(ResultCard)).toHaveLength(2)
        })

        it('displays the selectedResult', () => {
          expect(wrapper.find('.sn-search-box__item-content')).toHaveLength(0)
        })
      })
    })
  })
})
