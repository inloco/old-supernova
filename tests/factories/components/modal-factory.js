jest.unmock("../../../src/components/Modal/Main")
jest.unmock("../../../src/components/Modal/Header")
jest.unmock("../../../src/components/Modal/Body")
jest.unmock("../../../src/components/Modal/Footer")
jest.unmock("../../factories/components/base-factory")

import React from "react"
import Factory from "./base-factory"
import Modal from "../../../src/components/Modal/Main"
import ModalHeader from "../../../src/components/Modal/Header"
import ModalBody from "../../../src/components/Modal/Body"
import ModalFooter from "../../../src/components/Modal/Footer"

class ModalFactory extends Factory{
  template() {
    return(
      <Modal open={false}>
        <ModalHeader>
          <span className="modal-title">Título do Modal</span>
        </ModalHeader>

        <ModalBody>
          <p>Algum conteúdo pertinente ao modal daqui</p>
        </ModalBody>

        <ModalFooter>
          Rodapé desse modal
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalFactory