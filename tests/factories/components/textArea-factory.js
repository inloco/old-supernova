jest.unmock("../../../src/components/TextArea")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import TextArea from "../../../src/components/TextArea"

class TextAreaFactory extends Factory {
  template() {
    return(
      <TextArea
        id="targeting_geo_locations"
        name="targeting[geo_locations]"
        rows={5}
        tabIndex={3}
      />
    )
  }
}

export default TextAreaFactory
