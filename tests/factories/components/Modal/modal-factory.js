jest.unmock("../../../../src/components/Modal/Main")
jest.unmock("./../base-factory")

import React from "react"
import Factory from "./../base-factory"
import Modal from "../../../../src/components/Modal/Main"

class ModalFactory extends Factory{
  template() {
    return(
      <Modal id="advAdrressModal"
             size="lg"
             title="Coordenadas"
             label="Ok">
      </Modal>
    )
  }
}

export default ModalFactory
