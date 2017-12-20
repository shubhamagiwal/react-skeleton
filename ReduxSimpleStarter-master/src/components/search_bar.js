import React,{Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={term:''};
  }

  render() {
      //return <input onChange={this.onInputChange} />;
      // Controlled component -> value changes when the state changes
      return (
        <div className="search-bar"> <input
          value={this.state.term}
          onChange={(event)=> this.onInputChange(event.target.value) } />
      </div>);
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}

// const SearchBar= () =>{
//   return <input />
// }

export default SearchBar;
