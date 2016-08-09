jest.unmock("../../../src/components/SearchBox")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import SearchBox from "../../../src/components/SearchBox"

class SearchboxFactory extends Factory{
  template() {
    return(
      <SearchBox
        label="Busque aqui"
        helpMessage="Foo"
        typeMessage="info"
      />
    )
  }
}

export default SearchboxFactory