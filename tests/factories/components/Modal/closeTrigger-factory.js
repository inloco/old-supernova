jest.unmock("../../../../src/components/Modal/CloseTrigger")
jest.unmock("../../../../src/components/Button")
jest.unmock("./../base-factory")

import React from "react"
import Factory from "./../base-factory"
import ModalCloseTrigger from "../../../../src/components/Modal/CloseTrigger"
import Button from "../../../../src/components/Button"

class ModalCloseTriggerFactory extends Factory{
  template() {
    return(
      <ModalCloseTrigger id="id" modalId="advAdrressModal">
        <Button type="button"
                isDisabled={ false }
                style= "btn-raised"
                btnType= "default"
                label= "Edit"
                isModal={ true } />
      </ModalCloseTrigger>
    )
  }
}

export default ModalCloseTriggerFactory
