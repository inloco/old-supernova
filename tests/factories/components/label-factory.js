jest.unmock("../../../src/components/Label")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Label from "../../../src/components/Label"

class LabelFactory extends Factory {
  template() {
    return(
      <Label htmlFor="targeting_geo_locations" value="Locations"/>
    )
  }
}

export default LabelFactory
