jest.unmock("./base-factory")
jest.unmock("./card-factory")

import React from "react"
import Factory from "./base-factory"
import CardFactory from "./card-factory"
import CardList from "../../../src/components/Card/List"

class CardListFactory extends Factory {
  template() {
    const factory = new CardFactory

    return(
      <CardList>
        {factory.template()}
        {factory.template()}
        {factory.template()}
      </CardList>
    )
  }
}

export default CardListFactory
