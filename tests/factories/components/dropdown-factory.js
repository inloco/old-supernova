jest.unmock("./base-factory")
jest.unmock("../../../src/components/Dropdown/Main")
jest.unmock("../../../src/components/Dropdown/Item")
jest.unmock("../../../src/components/Dropdown/Group")

import React from "react"
import Factory from "./base-factory"
import Dropdown from "../../../src/components/Dropdown/Main"
import DropdownItem from "../../../src/components/Dropdown/Item"
import DropdownGroup from "../../../src/components/Dropdown/Group"

class DropdownFactory extends Factory{
  template() {
    return(
      <DropdownGroup>
        <Dropdown id="dropdown_id"
                  label="Current month"
                  secondaryLabel="Period:"
                  side="right"
                  secondaryIcon="icon-time"
                  icon="icon-drop-down">
          <DropdownItem id="dropdown_item_id" label="Link A" href="#a" />
          <DropdownItem label="Link B" href="#b" />
          <DropdownItem label="Link C" href="#c" />
        </Dropdown>
        <Dropdown label="Current month"
                  secondaryLabel="Period:"
                  side="right"
                  secondaryIcon="icon-time"
                  icon="icon-drop-down">
          <DropdownItem label="Link A" href="#a" />
          <DropdownItem label="Link B" href="#b" />
          <DropdownItem label="Link C" href="#c" />
        </Dropdown>
      </DropdownGroup>
    )
  }
}

export default DropdownFactory
