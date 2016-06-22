jest.unmock("../../../src/components/Info")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Info from "../../../src/components/Info"

class InfoFactory extends Factory{
  template() {
    return(
      <Info text="Texto de Ajuda"/>
    )
  }
}

export default InfoFactory