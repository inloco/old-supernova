import React from 'react'
import ProgressBar from './../index'
import moment from 'moment'
import Text from './../../Text'
import { shallow } from 'enzyme'

describe('ProgressBar', () => {
  describe('when has message', () => {
    const wrapper = shallow(
      <ProgressBar
        beginValue={0}
        currentValue={5}
        endValue={10}
        message='Faltam 5 unidades para completar a barra de progresso'
      />
    )

    it('has begin value', () => {
      const current = wrapper.find(Text).get(0).props.children
      const expected = '0'

      expect(current).toEqual(expected)
    })

    it('has current value', () => {
      const current = wrapper.find(Text).get(1).props.children
      const expected = '5 (50.0%)'

      expect(current).toEqual(expected)
    })

    it('has end value', () => {
      const current = wrapper.find(Text).get(2).props.children
      const expected = '10'

      expect(current).toEqual(expected)
    })

    it('has current 50% of width', () => {
      const current = wrapper.find('.sn-progress-bar__progress-wrapper')
      const expected = '50.0%'

      expect(current.prop('style').width).toEqual(expected)
    })

    it('has message', () => {
      const current = wrapper.find(Text).get(3).props.children
      const expected = 'Faltam 5 unidades para completar a barra de progresso'

      expect(current).toEqual(expected)
    })
  })

  describe('when has another color', () => {
    const wrapper = shallow(
      <ProgressBar
        beginValue={0}
        currentValue={5}
        endValue={10}
        color='#03A9F4'
      />
    )

    it('has begin value', () => {
      const current = wrapper.find(Text).get(0).props.children
      const expected = '0'

      expect(current).toEqual(expected)
    })

    it('has current value', () => {
      const current = wrapper.find(Text).get(1).props.children
      const expected = '5 (50.0%)'

      expect(current).toEqual(expected)
    })

    it('has end value', () => {
      const current = wrapper.find(Text).get(2).props.children
      const expected = '10'

      expect(current).toEqual(expected)
    })

    it('has current 50% of width', () => {
      const current = wrapper.find('.sn-progress-bar__progress-wrapper')
      const expected = '50.0%'

      expect(current.prop('style').width).toEqual(expected)
    })

    it('has another color', () => {
      const current = wrapper.find('.sn-progress-bar__progress-wrapper')
      const expected = '#03A9F4'

      expect(current.prop('style').backgroundColor).toEqual(expected)
    })
  })

  describe('when prop date is false', () => {
    describe('when current value is equals to begin value', () => {
      const wrapper = shallow(
        <ProgressBar
          beginValue={0}
          currentValue={0}
          endValue={1000}
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '0'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '0 (0.0%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = `${Number(1000).toLocaleString()}`

        expect(current).toEqual(expected)
      })

      it('has current 0% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '0.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is diferente to other values', () => {
      const wrapper = shallow(
        <ProgressBar
          beginValue={0}
          currentValue={500}
          endValue={1000}
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '0'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '500 (50.0%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = `${Number(1000).toLocaleString()}`

        expect(current).toEqual(expected)
      })

      it('has current 500% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '50.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is equals to end value', () => {
      const wrapper = shallow(
        <ProgressBar
          beginValue={0}
          currentValue={1000}
          endValue={1000}
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '0'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = `${Number(1000).toLocaleString()} (100.0%)`

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = `${Number(1000).toLocaleString()}`

        expect(current).toEqual(expected)
      })

      it('has current 100% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '100.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is bigger to end value', () => {
      const wrapper = shallow(
        <ProgressBar
          beginValue={0}
          currentValue={1200}
          endValue={1000}
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '0'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = `${Number(1200).toLocaleString()} (100.0%)`

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = `${Number(1000).toLocaleString()}`

        expect(current).toEqual(expected)
      })

      it('has current 100% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '100.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })
  })

  describe('when prop date is true', () => {
    describe('when current value is equals to begin value', () => {
      const wrapper = shallow(
        <ProgressBar
          date
          beginValue='2017-11-20'
          currentValue='2017-11-20'
          endValue='2017-11-25'
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '20 Nov'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '20 Nov (16.7%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = '25 Nov'

        expect(current).toEqual(expected)
      })

      it('has current 16.7% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '16.7%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is diferente to other values', () => {
      const wrapper = shallow(
        <ProgressBar
          date
          beginValue='2017-11-20'
          currentValue='2017-11-22'
          endValue='2017-11-25'
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '20 Nov'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '22 Nov (50.0%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = '25 Nov'

        expect(current).toEqual(expected)
      })

      it('has current 50% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '50.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is equals to end value', () => {
      const wrapper = shallow(
        <ProgressBar
          date
          beginValue='2017-11-20'
          currentValue='2017-11-25'
          endValue='2017-11-25'
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '20 Nov'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '25 Nov (100.0%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = '25 Nov'

        expect(current).toEqual(expected)
      })

      it('has current 100% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '100.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })

    describe('when current value is bigger to end value', () => {
      const wrapper = shallow(
        <ProgressBar
          date
          beginValue='2017-11-20'
          currentValue='2017-11-27'
          endValue='2017-11-25'
        />
      )

      it('has begin value', () => {
        const current = wrapper.find(Text).get(0).props.children
        const expected = '20 Nov'

        expect(current).toEqual(expected)
      })

      it('has current value', () => {
        const current = wrapper.find(Text).get(1).props.children
        const expected = '27 Nov (100.0%)'

        expect(current).toEqual(expected)
      })

      it('has end value', () => {
        const current = wrapper.find(Text).get(2).props.children
        const expected = '25 Nov'

        expect(current).toEqual(expected)
      })

      it('has current 100% of width', () => {
        const current = wrapper.find('.sn-progress-bar__progress-wrapper')
        const expected = '100.0%'

        expect(current.prop('style').width).toEqual(expected)
      })
    })
  })
})
