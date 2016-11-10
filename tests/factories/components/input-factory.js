jest.unmock("../../../src/components/Input")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Input from "../../../src/components/Input"

class InputFactory extends Factory{
  template() {
    return(
      <Input
        label="E-mail"
        type="email"
        required={ true }
        name="email"
        autoFocus={ true }
        value="foo@foo.com"
      />
    )
  }
}

export default InputFactory
