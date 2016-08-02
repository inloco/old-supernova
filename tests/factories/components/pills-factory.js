jest.unmock("../../../src/components/Pills/Main")
jest.unmock("../../../src/components/Pills/Pill")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import Pills from "../../../src/components/Pills/Main"
import Pill from "../../../src/components/Pills/Pill"

class PillsFactory extends Factory{
  template() {
    return(
      <Pills name="lala">
        <Pill label="Item 1" value="zoombie"/>
        <Pill label="Item 2" value="automatic"/>
        <Pill label="Item 3" value="manually"/>
      </Pills>
    )
  }
}

export default PillsFactory