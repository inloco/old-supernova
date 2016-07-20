jest.unmock("../../../src/components/Steps/Main")
jest.unmock("../../../src/components/Steps/Item")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Steps from "../../../src/components/Steps/Main"
import StepsItem from "../../../src/components/Steps/Item"

class StepsFactory extends Factory{
  template() {
    return(
      <Steps>
        <StepsItem label="Informações Gerais" index={1} done={true}/>
        <StepsItem label="Endereço" index={2} active={true}/>
        <StepsItem label="Confirmação" index={3} />
        <StepsItem label="Pagamento" index={4} />
      </Steps>
    )
  }
}

export default StepsFactory