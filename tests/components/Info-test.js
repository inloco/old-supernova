jest.unmock("../factories/components/info-factory")

import InfoFactory from "../factories/components/info-factory"

describe("Info", () => {
  const factory = new InfoFactory  
  const node = factory.getNode()
  
  it("has the title", () => {   
    expect(node.getAttribute("data-original-title")).toEqual("Texto de Ajuda")
  })
})