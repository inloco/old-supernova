jest.unmock("./base-factory")
jest.unmock("../../../src/components/Paginate/Main")
jest.unmock("../../../src/components/Paginate/Item")

import React from "react"
import Factory from "./base-factory"
import Paginate from "../../../src/components/Paginate/Main"
import PaginateItem from "../../../src/components/Paginate/Item"

class PaginateFactory extends Factory {
  template() {
    return(
      <Paginate>
        <PaginateItem href="publisher/index"
                      label="1"
                      icon="paginate-number"
                      active={ true } />
        <PaginateItem href="publisher/index?page=2"
                      label="2"
                      icon="paginate-number" />
      </Paginate>
    )
  }
}

export default PaginateFactory
