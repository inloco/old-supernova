jest.unmock("../../../src/components/Form/Group")
jest.unmock("../../../src/components/Form/Checkbox")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Group from "../../../src/components/Form/Group"
import Checkbox from "../../../src/components/Form/Checkbox"

class FormFactory extends Factory{
  template() {
    return(
      <div>
        <Group label="Form Group Label" id="form-group-factory">
          <Checkbox label="Texto do Checkbox" id="checkbox-factory"/>
          <Checkbox label="Texto do Checkbox"/>
        </Group>
      </div>
    )
  }
}

export default FormFactory