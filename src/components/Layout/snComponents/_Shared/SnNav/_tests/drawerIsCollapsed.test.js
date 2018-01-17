import React from 'react'
import drawerIsCollapsed from './../drawerIsCollapsed'

describe('drawerIsCollapsed', () => {
  describe('when drawerIsCollapsed is false and drawerIsOpened is false', () => {
    const context = {
      drawerIsCollapsed: false,
      drawerIsOpened: false
    }

    it('returns false', () => {
      const current = drawerIsCollapsed(context)

      expect(current).toBeFalsy()
    })
  })

  describe('when drawerIsCollapsed is false and drawerIsOpened is true', () => {
    const context = {
      drawerIsCollapsed: false,
      drawerIsOpened: true
    }

    it('returns false', () => {
      const current = drawerIsCollapsed(context)

      expect(current).toBeFalsy()
    })
  })

  describe('when drawerIsCollapsed is true and drawerIsOpened is false', () => {
    const context = {
      drawerIsCollapsed: true,
      drawerIsOpened: false
    }

    it('returns true', () => {
      const current = drawerIsCollapsed(context)

      expect(current).toBeTruthy()
    })
  })

  describe('when drawerIsCollapsed is true and drawerIsOpened is true', () => {
    const context = {
      drawerIsCollapsed: true,
      drawerIsOpened: true
    }

    it('returns false', () => {
      const current = drawerIsCollapsed(context)

      expect(current).toBeFalsy()
    })
  })
})