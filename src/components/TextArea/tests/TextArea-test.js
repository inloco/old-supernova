import React from 'react'
import TextArea from './../index'
import Label from './../../Label'
import { shallow } from 'enzyme'

describe('TextArea', () => {
  const onChange = jest.fn()
  const wrapper = shallow(
    <TextArea
      id="targeting_geo_locations"
      name="targeting[geo_locations]"
      rows={5}
      tabIndex={3}
      label="some label"
      onChange={onChange}
    />
  )

  const textArea = wrapper.find('textarea')

  beforeEach(() => {
    onChange.mockClear()
  })

  it('has id', () => {
    expect(textArea.props().id).toEqual('targeting_geo_locations')
  })

  it('has name', () => {
    expect(textArea.props().name).toEqual('targeting[geo_locations]')
  })

  it('has rows', () => {
    expect(textArea.props().rows).toEqual(5)
  })

  it('has label', () => {
    expect(wrapper.find(Label).props().value).toEqual('some label')
  })

  it('has tabindex', () => {
    expect(textArea.props().tabIndex).toEqual(3)
  })

  describe('when change value', () => {
    const mockEvent = {
      persist: () => {},
      target: {
        value: 'sometest'
      }
    }

    it('calls onChange', () => {
      textArea.simulate('change', mockEvent)

      expect(onChange).toBeCalled()
    })

    describe('when limit the number of characters', () => {
      beforeEach(() => {
        wrapper.setProps({ limit: 5 })
      })

      it('not calls onChange', () => {
        wrapper.find('textarea').simulate('change', mockEvent)

        expect(onChange).not.toBeCalled()
      })

      it('has counter', () => {
        const counter = wrapper.find('.sn-field__counter')

        expect(counter.text()).toEqual('0/5')
      })
    })
  })

  describe('when has error', () => {
    it('render error', () => {
      wrapper.setProps({ error: 'Error Message!' })
      
      expect(wrapper.find('.sn-form-group__message').text()).toEqual('Error Message!')
    })
  })
})
