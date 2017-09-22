import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'
const YOUTUBE_API_KEY = "AIzaSyBec_ThZ34HMYIzrkeyt7TF-xB5sUTgtQU";




// Create new component, that produce html

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videoData) => {
      this.setState({
        videos: videoData,
        selectedVideo:videoData[0]
      });
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={clickedVideo => this.setState({selectedVideo: clickedVideo})}
          videos={this.state.videos}/>

      </div>
    );
  }
}

// Take the generated HTML into the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
