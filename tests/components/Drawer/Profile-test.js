import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Drawer from "../../../src/components/Drawer/Main"
import DrawerProfile from "../../../src/components/Drawer/Profile"
import { shallow } from 'enzyme'

describe("Drawer Profile", () => {
  const wrapper = shallow(
    <Drawer>
      <DrawerProfile
        name="Nome do Usuário"
        email="nome@inlocomedia.com"/>
    </Drawer>
  )
  const node = wrapper.find(".sn-layout__drawer")

  it("exists", () => {
    expect(node.length).toEqual(1)
  })

  it("has a profile", () => {
    expect(node.find("Profile").length).toEqual(1)
  })
})
