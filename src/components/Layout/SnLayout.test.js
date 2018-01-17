import React from 'react'
import SnLayout from './SnLayout'
import Structure from './structuralComponents/Structure'
import Layout from './structuralComponents/Layout'
import Main from './structuralComponents/Main'
import Sysbar from './structuralComponents/Sysbar'
import Drawer from './structuralComponents/Drawer'
import Header from './structuralComponents/Header'
import Subheader from './structuralComponents/Subheader'
import Content from './structuralComponents/Content'
import Footer from './structuralComponents/Footer'
import Aside from './structuralComponents/Aside'
import { shallow } from 'enzyme'

describe('SnLayout', () => {
  describe('when has no props', () => {
    const wrapper = shallow(
      <SnLayout />
    )

    it('has a Structure', () => {
      const current = wrapper.find(Structure)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has a Layout', () => {
      const current = wrapper.find(Layout)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has a Main', () => {
      const current = wrapper.find(Main)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has a Content', () => {
      const current = wrapper.find(Content)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has no Sysbar', () => {
      const current = wrapper.find(Sysbar)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has no Drawer', () => {
      const current = wrapper.find(Drawer)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has no Header', () => {
      const current = wrapper.find(Header)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has no Subheader', () => {
      const current = wrapper.find(Subheader)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has no Footer', () => {
      const current = wrapper.find(Footer)
      const expected = 0

      expect(current).toHaveLength(expected)
    })

    it('has no Aside', () => {
      const current = wrapper.find(Aside)
      const expected = 0

      expect(current).toHaveLength(expected)
    })
  })

  describe('when has props', () => {
    const children = 't-children'
    const wrapper = shallow(
      <SnLayout
        sysbar={<div />}
        drawer={<div />}
        aside={<div />}
        header={<div />}
        subheader={<div />}
        footer={<div />}
      >
        <div id={children}>Children</div>
      </SnLayout>
    )

    it('has a Structure', () => {
      const current = wrapper.find(Structure)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    it('has a Layout', () => {
      const current = wrapper.find(Layout)
      const expected = 1

      expect(current).toHaveLength(expected)
    })

    describe('has specific order', () => {
      const layout = wrapper.find(Layout)

      it('has Sysbar in 0', () => {
        const current = layout.children().get(0).type
        const expected = Sysbar

        expect(current).toEqual(expected)
      })

      it('has Drawer in 1', () => {
        const current = layout.children().get(1).type
        const expected = Drawer

        expect(current).toEqual(expected)
      })

      it('has Main in 2', () => {
        const current = layout.children().get(2).type
        const expected = Main

        expect(current).toEqual(expected)
      })

      it('has Aside in 3', () => {
        const current = layout.children().get(3).type
        const expected = Aside

        expect(current).toEqual(expected)
      })
    })

    describe('when fixedContent is true', () => {
      const main = wrapper.find(Main).children()

      it('has Header in 0', () => {
        const current = main.children().get(0).type
        const expected = Header

        expect(current).toEqual(expected)
      })

      it('has Subheader in 1', () => {
        const current = main.children().get(1).type
        const expected = Subheader

        expect(current).toEqual(expected)
      })

      it('has Content in 2', () => {
        const current = main.children().get(2).type
        const expected = Content

        expect(current).toEqual(expected)
      })

      it('has Footer in 3', () => {
        const current = main.children().get(3).type
        const expected = Footer

        expect(current).toEqual(expected)
      })

      it('has Children inside the content', () => {
        const current = main.find(Content).children().props().id
        const expected = children

        expect(current).toEqual(expected)
      })
    })

    describe('when fixedContent is false', () => {
      wrapper.setProps({ fixedContent: false })
      const content = wrapper.find(Content)

      it('has Content', () => {
        const current = wrapper.find(Main).children().type()
        const expected = Content

        expect(current).toEqual(expected)
      })

      it('has Header in 0', () => {
        const current = content.children().get(0).type
        const expected = Header

        expect(current).toEqual(expected)
      })

      it('has Subheader in 1', () => {
        const current = content.children().get(1).type
        const expected = Subheader

        expect(current).toEqual(expected)
      })

      it('has Children in 2', () => {
        const current = content.children().get(2).props.id
        const expected = children

        expect(current).toEqual(expected)
      })

      it('has Footer in 3', () => {
        const current = content.children().get(3).type
        const expected = Footer

        expect(current).toEqual(expected)
      })
    })
  })

  describe('getChildContext', () => {
    const wrapper = shallow(
      <SnLayout drawerIsCollapsed={false} />
    )

    it('should return drawerIsCollapsed', () => {
      const current = wrapper.instance().getChildContext()
      const expected = false

      expect(current.drawerIsCollapsed).toEqual(expected)
    })

    it('should return drawerIsOpened', () => {
      const current = wrapper.instance().getChildContext()
      const expected = false

      expect(current.drawerIsOpened).toEqual(expected)
    })

    it('should return handleOpenDrawerClick', () => {
      const current = wrapper.instance().getChildContext()

      expect(current.handleOpenDrawerClick).not.toBe(undefined)
    })

    it('should return handleCloseDrawerClick', () => {
      const current = wrapper.instance().getChildContext()

      expect(current.handleCloseDrawerClick).not.toBe(undefined)
    })
  })

  describe('Sysbar', () => {
    describe('when has drawer', () => {
      const sysbar = <div />
      const drawer = <div />
      const wrapper = shallow(
        <SnLayout sysbar={sysbar} drawer={drawer} />
      )

      it('should has hasDrawer props equals to true', () => {
        const current = wrapper.find(Sysbar).props().hasDrawer
        const expected = true

        expect(current).toEqual(expected)
      })
    })

    describe('when has no drawer', () => {
      const sysbar = <div />
      const wrapper = shallow(
        <SnLayout sysbar={sysbar} />
      )

      it('should has hasDrawer props equals to false', () => {
        const current = wrapper.find(Sysbar).props().hasDrawer
        const expected = false

        expect(current).toEqual(expected)
      })
    })
  })

  describe('Drawer', () => {
    describe('when drawerIsCollapsed is true', () => {
      const drawer = <div />
      const wrapper = shallow(
        <SnLayout drawer={drawer} />
      )

      it('should has isCollapsed props equals to true', () => {
        const current = wrapper.find(Drawer).props().isCollapsed
        const expected = true

        expect(current).toEqual(expected)
      })

      it('should has handleCloseDrawerClick props', () => {
        const current = wrapper.find(Drawer).props().handleCloseDrawerClick

        expect(current).not.toBe(undefined)
      })
    })

    describe('when drawerIsCollapsed is false', () => {
      const drawer = <div />
      const wrapper = shallow(
        <SnLayout drawer={drawer} />
      ).setProps({ drawerIsCollapsed: false })

      it('should has isCollapsed props equals to false', () => {
        const current = wrapper.find(Drawer).props().isCollapsed
        const expected = false

        expect(current).toEqual(expected)
      })

      it('should has handleCloseDrawerClick props', () => {
        const current = wrapper.find(Drawer).props().handleCloseDrawerClick

        expect(current).not.toBe(undefined)
      })
    })
  })

  describe('Main', () => {
    describe('when has customizableContent equals to true', () => {
      const children = 't-children'
      const wrapper = shallow(
        <SnLayout
          sysbar={<div />}
          drawer={<div />}
          aside={<div />}
          customizableContent
        >
          <div id={children}>Children</div>
        </SnLayout>
      )

      it('has a Structure', () => {
        const current = wrapper.find(Structure)
        const expected = 1

        expect(current).toHaveLength(expected)
      })

      it('has a Layout', () => {
        const current = wrapper.find(Layout)
        const expected = 1

        expect(current).toHaveLength(expected)
      })

      describe('has specific order', () => {
        const layout = wrapper.find(Layout)

        it('has Sysbar in 0', () => {
          const current = layout.children().get(0).type
          const expected = Sysbar

          expect(current).toEqual(expected)
        })

        it('has Drawer in 1', () => {
          const current = layout.children().get(1).type
          const expected = Drawer

          expect(current).toEqual(expected)
        })

        it('has children in 2', () => {
          const current = layout.children().get(2).props.id
          const expected = children

          expect(current).toEqual(expected)
        })

        it('has Aside in 3', () => {
          const current = layout.children().get(3).type
          const expected = Aside

          expect(current).toEqual(expected)
        })
      })
    })
  })

  describe('handleOpenDrawerClick', () => {
    const wrapper = shallow(
      <SnLayout />
    ).setState({ drawerIsOpen: false })

    it('should change the drawerIsOpen state to true', () => {
      wrapper.instance().handleOpenDrawerClick()

      const current = wrapper.state().drawerIsOpen
      const expected = true

      expect(current).toEqual(expected)
    })
  })

  describe('handleCloseDrawerClick', () => {
    const wrapper = shallow(
      <SnLayout />
    ).setState({ drawerIsOpen: true })

    it('should change the drawerIsOpen state to false', () => {
      wrapper.instance().handleCloseDrawerClick()

      const current = wrapper.state().drawerIsOpen
      const expected = false

      expect(current).toEqual(expected)
    })
  })

  describe('handleScreenSizeChange', () => {
    const wrapper = shallow(
      <SnLayout />
    )

    it('should change the layoutWidth to the current window width', () => {
      wrapper.instance().handleScreenSizeChange()

      const current = wrapper.state().layoutWidth

      expect(current).not.toBe(undefined)
    })
  })

  describe('drawerMenuIsShowing', () => {
    describe('when layoutWidth is bigger than LAYOUT_RESPONSIVE_BREAKPOINT', () => {
      const wrapper = shallow(
        <SnLayout />
      ).setState({ layoutWidth: 900 })

      it('should return false', () => {
        const current = wrapper.instance().drawerMenuIsShowing()
        const expected = false

        expect(current).toEqual(expected)
      })
    })

    describe('when layoutWidth is smaller than LAYOUT_RESPONSIVE_BREAKPOINT', () => {
      const wrapper = shallow(
        <SnLayout />
      ).setState({ layoutWidth: 200 })

      it('should return true', () => {
        const current = wrapper.instance().drawerMenuIsShowing()
        const expected = true

        expect(current).toEqual(expected)
      })
    })
  })
})