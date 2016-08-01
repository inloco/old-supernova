jest.unmock("../../../src/components/Wizard/Main")
jest.unmock("../../../src/components/Wizard/Step")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import Wizard from "../../../src/components/Wizard/Main"
import Step from "../../../src/components/Wizard/Step"

class WizardDemo extends React.Component {
  render() {
    return(
      <div>
        <Wizard step={1} ref="wizard">
          <Step>Foo</Step>
          <Step>Baar</Step>
          <Step>Some</Step>
        </Wizard>

        <button id="next-button" onClick={() => {this.refs.wizard.next()}}>Next</button>
        <button id="previous-button" onClick={() => {this.refs.wizard.previous()}}>Previous</button>
      </div>
    )
  }
}

class WizardFactory extends Factory{
  template() {
    return <WizardDemo />
  }
}

export default WizardFactory