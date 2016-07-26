jest.unmock("../../../src/components/Tabs/Main")
jest.unmock("../../../src/components/Tabs/Tab")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import Tabs from "../../../src/components/Tabs/Main"
import Tab from "../../../src/components/Tabs/Tab"

class TabsFactory extends Factory{
  template() {
    return(
      <Tabs currentTab={1}>
        <Tab label="Opção A">
          <div className="sn-grid--bleed-top">Conteúdo de A</div>
        </Tab>

        <Tab label="Opção B">
          <div className="sn-grid--bleed-top">Conteúdo de B</div>
        </Tab>

        <Tab label="Opção C">
          <div className="sn-grid--bleed-top">Conteudo de C</div>
        </Tab>
      </Tabs>
    )
  }
}

export default TabsFactory