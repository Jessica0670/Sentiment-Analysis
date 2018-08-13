import React from 'react';
import $ from 'jquery';
class SVG extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.click);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    // console.log(this.props.graphData,' DID MOUNT')
    // this.setState({data: this.props.graphData})
    // console.log(this.state.data, 'inside SVG function')
  }


  render() {
    // for(var i = 0; i < this.props.graphData.length; i++){
    //   this.state.data.push(this.props.graphData[i])
    // }
    // console.log(this.state.data, 'LKJHGBVF')
    return (
      <div>
<p>inside svg component</p>
<svg width="460" height="160">

</svg>
</div>
    )
  }
}
export default SVG;
