jest.unmock("../../../../src/components/Steps/Bubble/Main")
jest.unmock("../../../../src/components/Steps/Bubble/Step")
jest.unmock("./../base-factory")

import React from "react"
import Factory from "./../base-factory"
import Steps from "../../../../src/components/Steps/Bubble/Main"
import Step from "../../../../src/components/Steps/Bubble/Step"

class StepsFactory extends Factory{
  template() {
    return(
      <Steps activeStep={2}>
        <Step label="Item Completo" />
        <Step label="Item Completo" />
        <Step label="Item Ativo" />
        <Step label="Item a Fazer" />
      </Steps>
    )
  }
}

export default StepsFactory