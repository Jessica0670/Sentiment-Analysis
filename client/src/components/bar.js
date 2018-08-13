import React from 'react';
import $ from 'jquery';
import * as d3 from "d3";
// import rd3 from 'react-d3';
import rd3 from 'rd3';
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalDataStructure: []
    };
  }

  componentWillMount(){ //works!
    let mappedData = this.props.data.map(x => {
      return x * 10
    })
    // run function to load data to y value in barData
    this.props.graphLoader(mappedData)
    this.state.finalDataStructure = this.props.graphLoader(mappedData)
    let barData = this.state.finalDataStructure
  }

  render() {
    let barData = [];
    const LineChart = rd3.LineChart;
    return  (<div>
      <p>chart component</p>
      <LineChart
        data={this.state.finalDataStructure}
        width={800}
        height={300}
        title="Line Chart"
        yAxisLabel="Score"
        xAxisLabel="Elapsed Time (5 minutes)"
        gridVertical={true}
        domain={{x: [,10], y: [-150, 150]}}
        gridVerticalStrokeDash={'1, 0'}
      />
  </div>)}
};

export default Chart;
