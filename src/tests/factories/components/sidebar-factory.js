jest.unmock("../../../components/Sidebar/Main")
jest.unmock("../../../components/Sidebar/Item")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Sidebar from "../../../components/Sidebar/Main"
import Item from "../../../components/Sidebar/Item"

class SidebarFactory extends Factory{
  template() {
    return(
      <Sidebar currentPath="#A">
        <Item label="Apps" href="#A" icon="icon-nav-campaigns">
          <Item label="New App" href="A1"/>
          <Item label="New Ad Unit" href="#A2"/>
        </Item>
        <Item label="Earnings" href="#B" icon="icon-nav-cash"/>
      </Sidebar>
    )
  }
}

export default SidebarFactory
