jest.unmock("./base-factory")
jest.unmock("../../../src/components/Dropdown/Main")

import React from "react"
import Factory from "./base-factory"
import Dropdown from "../../../src/components/Dropdown/Main"

class DropdownFactory extends Factory {
  template() {
    return(
      <Dropdown label="Dropdown">
        <a href="#">Dropdown result 1</a>
        <a href="#">Dropdown result 2</a>
        <a href="#">Dropdown result 3</a>
      </Dropdown>
    )
  }
}

export default DropdownFactory
