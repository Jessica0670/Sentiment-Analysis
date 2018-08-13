import React from 'react';
import $ from 'jquery';
class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.click);
    this.state = {
      term: '',
      data: [],
      view: false
    };
  }

  onChange(e){
    //update state to term on change
    this.setState({term: e.target.value})
  }

  buttonClick(){
    this.setState({ view: !this.state.view})
    this.props.click(this.state.term, this.state.view)
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.term} onChange={this.onChange.bind(this)}
          placeholder="search...">
        </input>
        <button type="submit" onClick={this.buttonClick.bind(this)}>search</button>
      </div>
    )
  }
}
export default Search;
