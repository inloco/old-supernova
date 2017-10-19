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

  describe('when it has a custom className', () => {
    beforeEach(() => {
      const customClass = 'shalala'
      wrapper.setProps({ className: customClass })

      it('has custom class', () => {
        expect(wrapper.find(`.${customClass}`)).toHaveLength(1)
      })
    })
  })

  it('renders an input', () => {
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('renders a search icon', () => {
    expect(wrapper.find('.sn-search-box__input-wrapper__input--icon')).toHaveLength(1)
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
      const spinner = wrapper.find('.sn-search-box__input-wrapper__input--spinner')

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

    describe('when user uses keyboard to navigate through results', () => {
      it('responds to ArrowDown keypress when no item is hovered', () => {
        wrapper.setState({ hoveredResult: undefined })
        input.simulate('keyDown', {
          key: 'ArrowDown',
          persist: jest.fn(),
          preventDefault: jest.fn()
        })

        expect(wrapper.state().hoveredResult).toEqual(0)
      })

      it('responds to ArrowDown keypress when last item is hovered', () => {
        wrapper.setState({ hoveredResult: 1 })
        input.simulate('keyDown', {
          key: 'ArrowDown',
          persist: jest.fn(),
          preventDefault: jest.fn()
        })

        expect(wrapper.state().hoveredResult).toEqual(1)
      })

      it('responds to ArrowUp keypress when last item is hovered', () => {
        wrapper.setState({ hoveredResult: 1 })
        input.simulate('keyDown', {
          key: 'ArrowUp',
          persist: jest.fn(),
          preventDefault: jest.fn()
        })

        expect(wrapper.state().hoveredResult).toEqual(0)
      })

      it('responds to ArrowUp keypress when first item is hovered', () => {
        wrapper.setState({ hoveredResult: 0 })
        input.simulate('keyDown', {
          key: 'ArrowUp',
          persist: jest.fn(),
          preventDefault: jest.fn()
        })

        expect(wrapper.state().hoveredResult).toEqual(undefined)
      })

      it('selects hovered result when Enter is pressed', () => {
        wrapper.setState({ hoveredResult: 0 })
        input.simulate('keyDown', {
          key: 'Enter',
          persist: jest.fn(),
          preventDefault: jest.fn()
        })

        expect(wrapper.state().hoveredResult).toEqual(undefined)
        expect(wrapper.state().selectedResults).toHaveLength(1)
      })
    })

    describe('when has filter prop', () => {
      beforeEach(() => {
        wrapper.setProps({ filter: true })
        wrapper.setState({ selectedResults: [] })
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
    beforeEach(() => {
      wrapper.setProps({ error: 'Some Erro!' })
    })

    it('has error class', () => {
      expect(wrapper.hasClass('sn-search-box--error'))
    })

    it('displays the error', () => {
      expect(wrapper.find('.sn-search-box__message--danger').text()).toEqual('Some Erro!')
    })
  })

  describe('initialSelectedResults', () => {
    const initialSelectedResults = [
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' }
    ]

    describe('when has initial selected results', () => {
      beforeEach(() => {
        wrapper = shallow(
          <Searchbox
            onSearch={() => {}}
            onSelect={() => {}}
            onUnselect={() => {}}
            results={[]}
            initialSelectedResults={initialSelectedResults}
          />
        )
      })

      it('sets initial selected results on state', () => {
        expect(wrapper.state().selectedResults).toEqual(initialSelectedResults)
      })
    })

    describe('when updates initial selected results', () => {
      beforeEach(() => {
        wrapper = shallow(
          <Searchbox
            onSearch={() => {}}
            onSelect={() => {}}
            onUnselect={() => {}}
            results={[]}
            initialSelectedResults={[]}
          />
        )

        wrapper.setProps({ initialSelectedResults })
      })

      it('updates selected results on state', () => {
        expect(wrapper.state().selectedResults).toEqual(initialSelectedResults)
      })
    })
  })

  describe('when renders selected results as chips with tooltips', () => {
    const initialSelectedResults = [
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' }
    ]

    beforeEach(() => {
      wrapper = shallow(
        <Searchbox
          onSearch={() => {}}
          onSelect={() => {}}
          onUnselect={() => {}}
          results={[]}
          initialSelectedResults={initialSelectedResults}
          selectedResultsType="chips"
          chipTooltip
        />
      )

      wrapper.setProps({ initialSelectedResults })
    })

    it('has a Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBeTruthy()
    })

    it('has a Chip', () => {
      expect(wrapper.find('Chip').exists()).toBeTruthy()
    })

    it('has chip helper className', () => {
      expect(wrapper.find('.sn-search-box--chips__input-wrapper__input').exists()).toBeTruthy()
    })
  })

  describe('when renders selected results as chips without tooltips', () => {
    const initialSelectedResults = [
      { id: 'a', title: 'A' },
      { id: 'b', title: 'B' }
    ]

    beforeEach(() => {
      wrapper = shallow(
        <Searchbox
          onSearch={() => {}}
          onSelect={() => {}}
          onUnselect={() => {}}
          results={[]}
          initialSelectedResults={initialSelectedResults}
          selectedResultsType="chips"
        />
      )

      wrapper.setProps({ initialSelectedResults })
    })

    it('has not a Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBeFalsy()
    })

    it('has a Chip', () => {
      expect(wrapper.find('Chip').exists()).toBeTruthy()
    })

    it('has chip helper className', () => {
      expect(wrapper.find('.sn-search-box--chips__input-wrapper__input').exists()).toBeTruthy()
    })
  })

  describe('when is disabled', () => {
    beforeEach(() => {
      wrapper.setProps({ disabled: true })
    })

    it('has correct className', () => {
      expect(wrapper.find('.sn-search-box--disabled').exists()).toBeTruthy()
    })
  })
})
