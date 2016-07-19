jest.unmock("./base-factory")
jest.unmock("../../../src/components/RadioButton/Main")
jest.unmock("../../../src/components/RadioButton/Label")
jest.unmock("../../../src/components/Input")

import React from "react"
import Factory from "./base-factory"
import RadioButton from "../../../src/components/RadioButton/Main"
import LabelRadioButton from "../../../src/components/RadioButton/Label"

class RadioButtonFactory extends Factory {
  template() {
    return(
      <RadioButton id="id" label="label" name="name" />
    )
  }
}

export default RadioButtonFactory
