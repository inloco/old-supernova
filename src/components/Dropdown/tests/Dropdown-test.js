import React from 'react'
import Dropdown from './../index'
import { mount } from 'enzyme'

describe('Dropdown', () => {
  const onChange = jest.fn()
  const options = [
    { value: 1, name: 'Option 1' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' }
  ]

  const wrapper = mount(
    <Dropdown
      value={1}
      options={options}
      layout="status"
      statusColor="#FF9800"
      onChange={onChange}
      callOnChangeWhenMount
    />
  )

  it('calls onChange when mount', () => {
    expect(onChange).toBeCalledWith(1)
  })

  it('has the dropdown class', () => {
    expect(wrapper.find('.sn-dropdown').length).toEqual(1)
  })

  it('has a button label equal dropdown', () => {
    const button = wrapper.find('.sn-dropdown__button')

    expect(button.text()).toEqual('Option 1')
  })

  it('has a button with border colored', () => {
    const button = wrapper.find('.sn-dropdown__button')

    expect(button.props().style.borderLeftColor).toEqual('#FF9800')
  })

  it('has a button with button type', () => {
    const button = wrapper.find('.sn-dropdown__button')

    expect(button.props().type).toEqual('button')
  })

  it('has a list with 3 items', () => {
    const items = wrapper.find('.sn-dropdown__results li')

    expect(items.length).toEqual(3)
  })

  it('has a not visible list', () => {
    const list = wrapper.find('.sn-dropdown__results')

    expect(list.props().style.display).toEqual('none')
  })

  it('has status layout', () => {
    expect(wrapper.find('.sn-dropdown--status').length).toEqual(1)
  })

  describe('when clicks in dropdown button', () => {
    const button = wrapper.find('.sn-dropdown__button')
    const list =   wrapper.find('.sn-dropdown__results')

    it('shows the list', () => {
      button.simulate('click')

      expect(list.props().style.display).toEqual('block')
    })

    describe('when clicks again in the button', () => {
      it('hiddens the list', () => {
        button.simulate('click')

        expect(list.props().style.display).toEqual('none')
      })
    })

    describe('when clicks in an item of list', () => {
      it('changes label', () => {
        const item = list.find('li').first()
        const label = wrapper.find('button').first()

        button.simulate('click')
        item.simulate('click')

        expect(label.text()).toEqual('Option 1')
      })
    })
  })

  describe('when dropdowns change the value', () => {
    it('calls onChange', () => {
      const dropdownItem = wrapper.find('li').last()

      dropdownItem.simulate('click')

      expect(onChange).toBeCalledWith(3)
    })
  })

  describe('when blur happens', () => {
    it('performs blur without crash', () => {
      const button = wrapper.find('button')
      button.simulate('click')

      const ul = wrapper.find('ul')
      wrapper.simulate('blur')
    })
  })

  describe('when use label', () => {
    it('calls onChange', () => {
      wrapper.setProps({ label: 'I am a label' })
      const label = wrapper.find('label')

      expect(label.props().children).toEqual('I am a label')
    })
  })

  describe('when is searchable', () =>{
    const onChange = jest.fn()
    const options = [
      { value: 1, name: 'Option 1' },
      { value: 2, name: 'Option 2' },
      { value: 3, name: 'Option 3' }
    ]

    const wrapperSearchable = mount(
      <Dropdown
        searchable
        searchPlaceholder="Buscar..."
        value={1}
        options={options}
        layout="box"
        onChange={onChange}
        callOnChangeWhenMount
      />
    )

    it('calls onChange when mount', () => {
      expect(onChange).toBeCalledWith(1)
    })

    it('has the dropdown class', () => {
      expect(wrapperSearchable.find('.sn-dropdown').length).toEqual(1)
    })

    it('has a button label equal dropdown', () => {
      const button = wrapperSearchable.find('.sn-dropdown__button')

      expect(button.text()).toEqual('Option 1')
    })

    it('render input search with correct class', () => {
      const input = wrapperSearchable.find('.sn-dropdown__input-search')

      expect(input.length).toEqual(1)
    })

    it('display no text', () => {
      const input = wrapperSearchable.find('input')

      expect(input.text()).toEqual('')
    })

    it('display placholder correctly', () => {
      const input = wrapperSearchable.find('input')

      expect(input.props().placeholder).toEqual('Buscar...')
    })

    it('clear all dropdown when filter', () => {
      const button = wrapperSearchable.find('button')

      button.simulate('click')

      const input = wrapperSearchable.find('.sn-dropdown__input-search')

      input.simulate('change', {target: {value: 'Not a option'}})

      const options = wrapperSearchable.find('li')

      expect(options.length).toEqual(1)
    })

    it('leave Option 2 on dropdown when filter', () => {
      const button = wrapperSearchable.find('button')

      button.simulate('click')

      const input = wrapperSearchable.find('.sn-dropdown__input-search')

      input.simulate('change', {target: {value: '2'}})

      const options = wrapperSearchable.find('li')

      expect(options.last().text()).toEqual('Option 2')
    })

  })

  describe('when is multiple', () => {
    const onChangeMultiple = jest.fn()
    const wrapperWithMultiple = mount(
      <Dropdown
        multiple
        layout="box"
        onChange={onChangeMultiple}
        placeholder="Pick some choice..."
        options={[
          { name: "Todos os anúncios", value: 1 },
          { name: "Somente meus anúncios", value: 2 },
        ]}
      />
    )

    it('doesnt display results', () => {
      expect(wrapperWithMultiple.find('.sn-search-box__selected li').length).toEqual(0)
    })

    it('display placeholder', () => {
      expect(wrapperWithMultiple.find('button').text()).toEqual('Pick some choice...')
    })

    describe('and click in multiple results', () => {
      beforeAll(() => {
        const options = wrapperWithMultiple.find('.sn-dropdown__results li')

        options.last().simulate('click')
        options.first().simulate('click')
      })

      it('saves values in state', () => {
        expect(wrapperWithMultiple.state('values')).toEqual([2, 1])
      })

      it('display results', () => {
        expect(wrapperWithMultiple.find('.sn-search-box__selected li').length).toEqual(2)
      })

      it('call onChange', () => {
        expect(onChangeMultiple.mock.calls[1][0]).toEqual([2, 1])
      })

      describe('when click in remove button', () => {
        it('removes the value from state', () => {
          const firstResult = wrapperWithMultiple.find('.sn-search-box__selected li').first()

          firstResult.find('button').simulate('click')

          expect(wrapperWithMultiple.state('values')).toEqual([1])
        })
      })
    })
  })

  describe('when is loading options', () => {
    const wrapperLoading = mount(
      <Dropdown
        layout="box"
        onChange={onChange}
        loadingPlaceholder={'Loding options...'}
        placeholder="Pick some choice..."
        options={[]}
      />
    )

    it('has the loading class in button', () => {
      expect(wrapperLoading.find('.-loading').length).toEqual(1)
    })

    it('display loading placeholder', () => {
      expect(wrapperLoading.find('button').text()).toEqual('Loding options...')
    })

    it('does not has results list', () => {
      expect(wrapperLoading.find('.sn-dropdown__results').length).toEqual(0)
    })
  })
})
