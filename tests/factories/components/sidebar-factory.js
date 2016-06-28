jest.unmock("../../../src/components/Sidebar/Main")
jest.unmock("../../../src/components/Sidebar/Logo")
jest.unmock("../../../src/components/Sidebar/User/Main")
jest.unmock("../../../src/components/Sidebar/User/Item")
jest.unmock("../../../src/components/Sidebar/Menu/Main")
jest.unmock("../../../src/components/Sidebar/Menu/Item")
jest.unmock("../../../src/components/Sidebar/Footer/Main")
jest.unmock("../../../src/components/Sidebar/Footer/Link")
jest.unmock("../../../src/components/Dropdown/Main")
jest.unmock("../../../src/components/Dropdown/Item")
jest.unmock("../../../src/helpers/sidebar")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Sidebar from "../../../src/components/Sidebar/Main"
import SidebarLogo from "../../../src/components/Sidebar/Logo"
import SidebarUser from "../../../src/components/Sidebar/User/Main"
import SidebarMenu from "../../../src/components/Sidebar/Menu/Main"
import SidebarMenuItem from "../../../src/components/Sidebar/Menu/Item"
import SidebarFooter from "../../../src/components/Sidebar/Footer/Main"
import SidebarFooterLink from "../../../src/components/Sidebar/Footer/Link"

class SidebarFactory extends Factory{
  template() {
    return(
      <Sidebar>
        <SidebarLogo href="/en"
              imageName="brand-inlocomedia.png"
              src="http://localhost:4000/assets/v2/1_0x/brand-inlocomedia.png"/>
        <SidebarUser avatarName="inloco-avatar.jpg"
                     avatarSrc="http://localhost:4000/assets/v2/1_0x/inloco-avatar.jpg"
                     userName="Publisher2"
                     userEmail="publisher@inlocomedia.com"
                     accountHref="/en/publishers/registrations"
                     accountLabel="View my account"
                     logoutHref="#sair"
                     logoutLabel="Logout"
                     currentDropdownItemName="Advertiser"
                     dropdownItemHref="/en/publishers"
                     dropdownItemName="Publisher"
                     userCreditsCash="0.00"
                     userCreditsCurrency="R$"
                     userCreditsTitle="Credits"
                     userImpersonateHref="/en/applications"
                     userImpersonateLabel="Retorne para x@inlocomedia.com" />
        <SidebarMenu currentPath="#A">
          <SidebarMenuItem label="Apps" href="#A" icon="icon-nav-campaigns">
            <SidebarMenuItem label="New App" href="A1"/>
            <SidebarMenuItem label="New Ad Unit" href="#A2"/>
          </SidebarMenuItem>
          <SidebarMenuItem label="Earnings" href="#B" icon="icon-nav-cash"/>
        </SidebarMenu>
        <SidebarFooter company="In Loco Media">
          <SidebarFooterLink href="www.google.com.br" label="Privacidade" />
          <SidebarFooterLink href="www.google.com.br" label="Termos de Uso" />
          <SidebarFooterLink href="www.google.com.br" label="Contato" />
        </SidebarFooter>
      </Sidebar>
    )
  }
}

export default SidebarFactory
