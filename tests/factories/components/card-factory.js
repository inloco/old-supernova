jest.unmock("../../../src/components/Card/Main")
jest.unmock("../../../src/components/Card/Col")
jest.unmock("../../../src/components/Card/Row")
jest.unmock("../../../src/components/Card/List")
jest.unmock("./base-factory")

import React from "react"
import Factory from "./base-factory"
import Card from "../../../src/components/Card/Main"
import CardCol from "../../../src/components/Card/Col"
import CardRow from "../../../src/components/Card/Row"
import CardList from "../../../src/components/Card/List"

class CardFactory extends Factory {
  template() {
    return(
      <Card>
        <CardCol size={2}>
          <CardRow isTitle={true}>
            Nome da Campanha
          </CardRow>

          <CardRow>Foo Campaign</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Other Block
          </CardRow>

          <CardRow>Other value to this block</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Nome da Campanha
          </CardRow>

          <CardRow>Foo Campaign</CardRow>
        </CardCol>

        <CardCol size={2}>
          <CardRow isTitle={true}>
            Other Block
          </CardRow>

          <CardRow>Other value to this block</CardRow>
        </CardCol>

        <CardCol center={true}>
          <a href=""><i className="material-icons"></i></a>
        </CardCol>
      </Card>
    )
  }
}

export default CardFactory
