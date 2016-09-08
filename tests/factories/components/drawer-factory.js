jest.unmock("../../../src/components/Drawer/Main")
jest.unmock("../../../src/components/Drawer/Title")
jest.unmock("../../../src/components/Drawer/Nav")
jest.unmock("../../../src/components/Drawer/Profile")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Drawer from "../../../src/components/Drawer/Main"
import DrawerTitle from "../../../src/components/Drawer/Title"
import DrawerNav from "../../../src/components/Drawer/Nav"
import DrawerProfile from "../../../src/components/Drawer/Profile"

class DrawerFactory extends Factory{
  template() {
    return(
      <Drawer>
        <DrawerTitle>AdsOps</DrawerTitle>
        <DrawerProfile
          name="Nome do Usuário"
          email="nome@inlocomedia.com"/>
        <DrawerNav>
          <a href="/panel/" label="Propostas"></a>
          <a href="/panel/" label="Propostas"></a>
          <a href="/panel/" label="Propostas"></a>
        </DrawerNav>
      </Drawer>
    )
  }
}

export default DrawerFactory
