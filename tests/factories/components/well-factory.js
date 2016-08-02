jest.unmock("../../../src/components/Well")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Well from "../../../src/components/Well"

class WellFactory extends Factory {
  template() {
    return(
      <Well>I am a Well!</Well>
    )
  }
}

export default WellFactory
