jest.unmock("../../../src/components/Icon")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Icon from "../../../src/components/Icon"

class IconFactory extends Factory {
  template() {
    return(
      <Icon content="" />
    )
  }
}

export default IconFactory
