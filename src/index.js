import _ from 'lodash';
import React, { Component} from 'react'; //import React to handle React components
import ReactDOM from 'react-dom'; //reactDOM will handle your rendering
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //give a file reference if you created it. no need to do that for libraries that are already installed
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDt9rKY86hbmVKVry4wEsa2Ap-EERgWrUw'



//Create a new component. This component should produce some html.
//const = constant variable that won't be mutated

class App extends Component{
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('puppies')
    
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos:videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
       <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    ); //jsx: looks like html but inside javascript. Webpack and Babel will transpile this for us.
  }
}

//THIS COMPONENT IS A CLASS, YOU NEED TO INSTANTIATE A NEW ONE

//take this component's generated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container')); //WRAPPED WITH JSX TAGS CREATES AN INSTANCE
//first argument is the instance of the class, second arg is the target location
