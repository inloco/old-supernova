import React, { PropTypes } from "react"
import { Chart } from "react-google-charts"

class Area extends React.Component {
  render() {
    const options = {
      legend: "none"
    }
    
    return (
      <Chart
        chartType="AreaChart"
        data={ this.props.data }
        options={ options }
        width={ "100%" }
        height={ "400px" } />
    )
  }
}

export default Area