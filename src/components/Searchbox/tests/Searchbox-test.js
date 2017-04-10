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

  describe('when provides props', () => {
     it('has placeholder', () => {
      wrapper.setProps({ placeholder: 'place' })
      const input = wrapper.find('input')

      expect(input.props().placeholder).toEqual('place')
    })
  })

  describe('loading img for results', () => {
    it('has loader spinner', () => {
      wrapper.setProps({ loading: true })
      const spinner = wrapper.find('.sn-search-box__input--spinner')

      expect(spinner.props().alt).toEqual('spinner')
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

    describe('when has filter prop', () => {
      beforeEach(() => {
        wrapper.setProps({ filter: true })
      })

      it('displays only Shoppings when type shop', () => {
        input.simulate('change', { target: { value: 'shop' }})

        expect(wrapper.find(ResultCard)).toHaveLength(1)
      })

      it('doesnt display any results when type not matched value', () => {
        input.simulate('change', { target: { value: '----some-random-value---' }})

        expect(wrapper.find(ResultCard)).toHaveLength(0)
      })
    })

    describe('when has single props', () => {
      beforeEach(() => {
        wrapper.setProps({ single: true })
        wrapper.setState({ selectedResults: [{ id: '1' }]})
      })

      it('displays only one result', () => {
        expect(wrapper.find('.sn-search-box__item-content')).toHaveLength(1)
      })

      it('doesnt display input', () => {
        expect(wrapper.find('input')).toHaveLength(0)
      })
    })
  })

  describe('when has error', () => {
    it('displays the error', () => {
      wrapper.setProps({ error: 'Some Erro!' })

      expect(wrapper.find('.sn-search-box__message--danger').text()).toEqual('Some Erro!')
    })
  })
})
