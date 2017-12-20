// Create a new component and produce some html
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY='AIzaSyAHQOMBbLvGgwIBrvVlvSOV5L0lbXNA0UQ';


class App extends Component{

  constructor(props){

    super(props);
    this.state={
      videos:[],
      selectedVideo:null};

    // YTSearch({key:API_KEY,term:'surfboards'},(videos) => {
    //   this.setState({videos}); //this.setState({videos:videos})
    //   this.setState({selectedVideo:videos[0]})
    // });

    this.videoSearch('surfboards')

  }

  videoSearch(term){

    YTSearch({key:API_KEY,term:term},(videos) => {
      this.setState({videos}); //this.setState({videos:videos})
      this.setState({selectedVideo:videos[0]})
    });

  }

  render(){
    const videoSearch=_.debounce(term => {this.videoSearch(term)},300);
            return <div>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                      videos={this.state.videos}
                      onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
                   </div>;
            }
}



// Take the component and put it on the page in the DOM
ReactDOM.render(<App />,document.querySelector('.container'));
