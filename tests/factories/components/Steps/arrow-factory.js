jest.unmock("../../../../src/components/Steps/Arrow/Main")
jest.unmock("../../../../src/components/Steps/Arrow/Step")
jest.unmock("./../base-factory")

import React from "react"
import Factory from "./../base-factory"
import Steps from "../../../../src/components/Steps/Arrow/Main"
import Step from "../../../../src/components/Steps/Arrow/Step"

class StepsFactory extends Factory{
  template() {
    return(
      <Steps activeStep={1}>
        <Step label="Informações Gerais"/>
        <Step label="Endereço" />
        <Step label="Confirmação" />
        <Step label="Pagamento" />
      </Steps>
    )
  }
}

export default StepsFactory