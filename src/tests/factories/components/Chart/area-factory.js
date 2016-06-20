jest.unmock("../../../../components/Chart/Area")
jest.unmock("./../base-factory")
jest.unmock("react-google-charts")

import React from "react"
import Factory from "./../base-factory" 
import AreaChart from "../../../../components/Chart/Area"

class AreaChartFactory extends Factory{
  template() {
    const data = [
      ["Year","Sales","Expenses"],
      ["2013",1000,400],
      ["2014",1170,460],
      ["2015",660,1120],
      ["2016",1030,540]
    ]
    
    return(
      <AreaChart data={ data }/>
    )
  }
}

export default AreaChartFactory