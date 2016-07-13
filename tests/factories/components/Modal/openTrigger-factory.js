jest.unmock("../../../../src/components/Modal/OpenTrigger")
jest.unmock("../../../../src/components/Button")
jest.unmock("./../base-factory")

import React from "react"
import Factory from "./../base-factory"
import ModalOpenTrigger from "../../../../src/components/Modal/OpenTrigger"
import Button from "../../../../src/components/Button"

class ModalOpenTriggerFactory extends Factory{
  template() {
    return(
      <ModalOpenTrigger id="id" modalId="advAdrressModal">
        <Button type="button"
                isDisabled={ false }
                style= "btn-raised"
                btnType= "default"
                label= "Edit"
                isModal={ true } />
      </ModalOpenTrigger>
    )
  }
}

export default ModalOpenTriggerFactory
