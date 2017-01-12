jest.unmock("../../../src/components/Header")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Header from "../../../src/components/Header"

class HeaderFactory extends Factory {
  template() {
    return(
      <Header
        title="Some section"
        subTitle="Second section">
        Something here
      </Header>
    )
  }
}

export default HeaderFactory
