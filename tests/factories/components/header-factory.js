jest.unmock("../../../src/components/Header/Main")
jest.unmock("../../../src/components/Header/Item")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Header from "../../../src/components/Header/Main"
import Item from "../../../src/components/Header/Item"

class HeaderFactory extends Factory{
  template() {
    return(
      <Header>
        <Item label="Apps" href="#A"/>
        <Item label="Music" href="#B"/>
        <Item label="Edit" href="#B"/>
      </Header>
    )
  }
}

export default HeaderFactory
