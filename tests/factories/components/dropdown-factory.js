jest.unmock("./base-factory")
jest.unmock("../../../src/components/Dropdown/Main")
jest.unmock("../../../src/components/Dropdown/Item")

import React from "react"
import Factory from "./base-factory" 
import Dropdown from "../../../src/components/Dropdown/Main"
import DropdownItem from "../../../src/components/Dropdown/Item"

class DropdownFactory extends Factory{
  template() {
    return(
      <Dropdown side="right">
        <DropdownItem label="Link A" href="#a" />
        <DropdownItem label="Link B" href="#b" />
        <DropdownItem label="Link C" href="#c" />
      </Dropdown>
    )
  }
}

export default DropdownFactory