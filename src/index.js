import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDVHDuZe6AkWkx5sGbjFAbQy5zQlk6JEpE';

// 
class App extends Component {

    constructor(props){
      super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'uk top 40'}, videos => {
           this.setState({ videos });
        })
    }

    render(){
        return (
            <div> 
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
            );
        }
    }
//

ReactDOM.render(<App />, document.querySelector('.container'));