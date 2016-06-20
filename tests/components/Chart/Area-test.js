jest.unmock("../../factories/components/Chart/area-factory")

import AreaChartFactory from "../../factories/components/Chart/area-factory"

describe("Chart Area", () => {
  const factory = new AreaChartFactory  
  const node = factory.getNode()
  
  it("loading google charts", () => {   
    expect(node.textContent.trim()).toEqual("Rendering Chart...")
  })
})