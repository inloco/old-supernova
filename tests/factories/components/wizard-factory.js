jest.unmock("../../../src/components/Wizard/Main")
jest.unmock("../../../src/components/Wizard/Step")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import Wizard from "../../../src/components/Wizard/Main"
import Step from "../../../src/components/Wizard/Step"

class WizardDemo extends React.Component {
  handleOnChange() {
    const { factoryProps } = this.props

    if(factoryProps) {
      return factoryProps.onChange
    }
  }

  render() {
    return(
      <div>
        <Wizard activeStep={1} ref="wizard" onChange={this.handleOnChange()}>
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
  template(props) {
    return <WizardDemo factoryProps={props}/>
  }
}

export default WizardFactory