jest.unmock("../../../src/components/Sidebar/Main")
jest.unmock("../../../src/components/Sidebar/Logo")
jest.unmock("../../../src/components/Sidebar/Menu/Main")
jest.unmock("../../../src/components/Sidebar/Menu/Item")
jest.unmock("../../../src/components/Sidebar/Footer/Main")
jest.unmock("../../../src/components/Sidebar/Footer/Link")
jest.unmock("../../../src/helpers/sidebar")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Sidebar from "../../../src/components/Sidebar/Main"
import Logo from "../../../src/components/Sidebar/Logo"
import Menu from "../../../src/components/Sidebar/Menu/Main"
import Item from "../../../src/components/Sidebar/Menu/Item"
import Footer from "../../../src/components/Sidebar/Footer/Main"
import FooterLink from "../../../src/components/Sidebar/Footer/Link"

class SidebarFactory extends Factory{
  template() {
    return(
      <Sidebar>
        <Logo href="/en"
              imageName="brand-inlocomedia.png"
              src="http://localhost:4000/assets/v2/1_0x/brand-inlocomedia.png"/>
        <Menu currentPath="#A">
          <Item label="Apps" href="#A" icon="icon-nav-campaigns">
            <Item label="New App" href="A1"/>
            <Item label="New Ad Unit" href="#A2"/>
          </Item>
          <Item label="Earnings" href="#B" icon="icon-nav-cash"/>
        </Menu>
        <Footer company="In Loco Media">
          <FooterLink href="www.google.com.br" label="Privacidade" />
          <FooterLink href="www.google.com.br" label="Termos de Uso" />
          <FooterLink href="www.google.com.br" label="Contato" />
        </Footer>
      </Sidebar>
    )
  }
}

export default SidebarFactory
