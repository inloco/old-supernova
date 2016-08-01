jest.unmock("../../../src/components/Input")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Input from "../../../src/components/Input"

class InputFactory extends Factory{
  template() {
    return(
      <Input id="publisher-id"
             type="text"
             placeholder="Digite seu nome"
             name="publisher[nome]"
             dataRemoteInput={ true }
             value="current_month" />
    )
  }
}

export default InputFactory
