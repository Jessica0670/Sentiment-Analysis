import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js';
import Chart from './components/bar.js';

import Moment from 'react-moment';
import 'moment-timezone';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        id: 1,
        name: 'Facebook!'
      },
      graphData: [],
      view: true,
    }
  }

  filterTime(string) {
  let arr = string.split("").reverse();
  let cut = arr.indexOf(":") -2
  let x = []
  let piece = arr.slice(cut).reverse()
  let cut1 = arr.indexOf(":") - 1
  let piece1 = piece.slice(cut1).join("")
  let array = piece1.split(":")

  array[1] = 5 * Math.round( array[1] / 5 );

  return array.join(":")
}

  requestData(term, view){
    this.state.graphData = []
    $.ajax({
      type: "GET",
      url:'/id/'+term,
      success: (data) => {
        console.log('ajax success') 
        for(var i = 0; i < data.length; i++){
          const dateToFormat = data[i].time
          let score = data[i].score
          let filterTime = (dateToFormat) => {
          dateToFormat = dateToFormat.toString()
          let arr = dateToFormat.split("").reverse();
          let cut = arr.indexOf(":") + 1
          let x = []
          let piece = arr.slice(cut).reverse()
          let cut1 = arr.indexOf(":") - 1
          let piece1 = piece.slice(cut1).join("")
          let array = piece1.split(":")
          array[1] = 5 * Math.round( array[1] / 5 );
          return array.join(":")
        }




          let filter5 = filterTime(dateToFormat)
          let chunkArray = [];
          let item = {}
          let f = () => {


            item.time = filter5;
            item.score = 0;
            let chunking = (filter5, score) => {
              // chunkArray.push(item)
              // console.log(chunkArray, item)
              // for(var i = 0; i < chunkArray.length; i++){
                // if(filter5 === item.time){
                  // console.log(filter5, item.time)
                  // console.log('true')
                  item.score += parseInt(score)
                  // console.log(filter5, item.time, item.score)
                  // console.log(score, chunkArray, 'ARRAY', item, "ITEM")
                // }
                chunkArray.push(item)
                // else {
                //   console.log(item)
                //   chunkArray.push(item)
                //   item.time = filter5
                //   item.score = parseInt(score)
                // }

              // }
              return chunkArray
            }
            chunking(filter5, score)
          }
      f()
          //allow # symbol when searching
          //join # with closest word to the right when splitting

          //add and push chunks down here!
          if(data[i].message.indexOf(term) >= 0){
            this.state.graphData.push(data[i].score)
          }
        }
        this.setState({view:view})
      },
      error: (err) => {
        console.log('fail ajax', err)
      }
    })
  }

  renderView() {
    if (this.state.view === true) {
      return <Search click={this.requestData.bind(this)} view={() => this.changeView(true)} graphData={this.state.graphData}/>

    } else {
      return (
        <div>
        <Search click={this.requestData.bind(this)} view={() => this.changeView(true)} graphData={this.state.graphData}/>
        <Chart data={this.state.graphData} graphLoader={this.graphLoader.bind(this)}/>
      </div>
      )
    }
  }

//create function to load data to y value in barData
  graphLoader(graphDataArray){
    let barData = []
    let final = {};
      if(graphDataArray.length < 1){
        return 'empty data line 30 barjs'
      }
      final.name = "Series A"
      final.values = []
      let count = 1
      graphDataArray.forEach(item => {
        let a = {}
        a.x = count++;
        a.y = item
        final.values.push(a)
      })
      barData.push(final)
      return barData
  }

  render () {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
