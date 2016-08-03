jest.unmock("../../../src/components/Header")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Header from "../../../src/components/Header"

class HeaderFactory extends Factory{
  template() {
    return(
      <Header>Some section</Header>
    )
  }
}

export default HeaderFactory
